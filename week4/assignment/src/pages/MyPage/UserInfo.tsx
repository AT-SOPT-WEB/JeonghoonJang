import Button from "../../components/Button";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import MainContainer from "../../components/MainContainer";
import PageSubTitle from "../../components/PageSubTitle";
import PageTitle from "../../components/PageTitle";
import { useState } from "react";

import { updateNickname } from "../../apis/user";

const UserInfo = () => {
  const [nickName, setNickName] = useState("");
  const [isFull, setIsFull] = useState(false);

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickName(value);
    setIsFull(value.trim() !== "");
  };

  const handleSubmit = async () => {
    try {
      await updateNickname(nickName);
      window.location.href = "/mypage/info";
      alert("정보 변경 완료! 닉네임 괜찮네요.");
    } catch (e) {
      alert("닉네임 수정 실패 ㅜㅜ");
    }
  };

  return (
    <div>
      <Header />
      <MainContainer>
        <PageTitle text="내 정보 수정하기" />
        <PageSubTitle text="새 닉네임" />
        <InputBox
          type="text"
          placeholder="새 닉네임을 입력하세요"
          value={nickName}
          onChange={handleNickNameChange}
        />
        <Button text="저장" isFull={isFull} onClick={handleSubmit} />
      </MainContainer>
    </div>
  );
};

export default UserInfo;
