import Button from "../components/Button";
import InputBox from "../components/InputBox";
import MainContainer from "../components/MainContainer";
import PageTitle from "../components/PageTitle";
import PageSubTitle from "../components/PageSubTitle";
import { useState } from "react";
import { useNavigate } from "react-router";
import { getFirstPasswordError } from "../utils/getFirstPasswordError";
import { getIsFull } from "../utils/getIsFull";

const SignUp = () => {
  const nav = useNavigate();
  const [id, setId] = useState("");
  const [passWd, setPassWd] = useState("");
  const [confirmPassWd, setConfirmPassWd] = useState("");
  const [nickName, setNickName] = useState("");
  const [step, setStep] = useState(1);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
  };

  const handlePassWdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassWd(value);
  };

  const handleConfirmPassWdChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassWd(value);
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleAlert = () => {
    alert(`${nickName}님 반갑습니다! 회원가입에 성공했어요.`);
    nav("/login");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isFull) {
      if (step === 1 || step === 2) nextStep();
      else if (step === 3) handleAlert();
    }
  };

  const firstError = getFirstPasswordError(passWd, confirmPassWd);

  const isFull = getIsFull({
    step,
    id,
    passWd,
    confirmPassWd,
    nickName,
    firstError: !!firstError,
  });

  return (
    <MainContainer>
      {step === 1 && (
        <>
          <PageTitle text="회원가입" />
          <PageSubTitle text="아이디" />
          <InputBox
            placeholder="아이디를 입력해주세요(8~20자, 대소문자/숫자만 가능)"
            value={id}
            onChange={handleIdChange}
            onKeyDown={onKeyDown}
          />
          <Button text="다음" isFull={isFull} onClick={nextStep} />
        </>
      )}
      {step === 2 && (
        <>
          <PageTitle text="회원가입" />
          <PageSubTitle text="비밀번호" />
          <InputBox
            placeholder="비밀번호를 입력해주세요"
            value={passWd}
            onChange={handlePassWdChange}
            onKeyDown={onKeyDown}
          />
          <InputBox
            placeholder="비밀번호 확인"
            value={confirmPassWd}
            onChange={handleConfirmPassWdChange}
            onKeyDown={onKeyDown}
          />

          {firstError && (
            <div className="text-sm text-red-500">
              <p>{firstError.message}</p>
            </div>
          )}

          <Button text="다음" isFull={isFull} onClick={nextStep} />
        </>
      )}
      {step === 3 && (
        <>
          <PageTitle text="회원가입" />
          <PageSubTitle text="닉네임" />
          <InputBox
            placeholder="닉네임을 입력해주세요"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <Button text="회원가입 하기" isFull={isFull} onClick={handleAlert} />
        </>
      )}
      <div className="flex gap-1 text-xs">
        <span>이미 회원이신가요?</span>
        <button
          className="text-green-600 underline cursor-pointer"
          onClick={() => nav("/login")}
        >
          로그인
        </button>
      </div>
    </MainContainer>
  );
};

export default SignUp;
