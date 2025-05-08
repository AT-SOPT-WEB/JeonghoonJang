import Button from "../components/Button";
import InputBox from "../components/InputBox";
import MainContainer from "../components/MainContainer";
import { useState } from "react";
import { useNavigate } from "react-router";
import PageTitle from "../components/PageTitle";
import { isFormFull } from "../utils/isFormFull";
import { signin } from "../apis/auth";

const Login = () => {
  const [id, setId] = useState("");
  const [passWd, setPassWd] = useState("");
  const [isFull, setIsFull] = useState(false);
  const nav = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
    setIsFull(isFormFull(value, passWd));
  };

  const handlePasswdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassWd(value);
    setIsFull(isFormFull(id, value));
  };

  const handleSignin = async () => {
    try {
      const { accessToken, userId } = await signin({
        loginId: id,
        password: passWd,
      });
      localStorage.setItem("token", accessToken);
      localStorage.setItem("userId", String(userId));
      window.location.href = "/mypage/info";
    } catch (e) {
      alert("로그인 실패! 아이디/비밀번호를 확인해주세요.");
    }
  };

  return (
    <MainContainer>
      <PageTitle text="로그인" />
      <InputBox placeholder="아이디" value={id} onChange={handleIdChange} />
      <InputBox
        placeholder="비밀번호"
        value={passWd}
        onChange={handlePasswdChange}
      />
      <Button text="로그인" isFull={isFull} onClick={handleSignin} />
      <button
        className="text-xs text-green-600 underline cursor-pointer"
        onClick={() => nav("/signup")}
      >
        회원가입
      </button>
    </MainContainer>
  );
};

export default Login;
