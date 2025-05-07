import Button from "../../components/Button";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import MainContainer from "../../components/MainContainer";
import PageSubTitle from "../../components/PageSubTitle";
import PageTitle from "../../components/PageTitle";
import { useState } from "react";

const UserInfo = () => {
  const [nickName, setNickName] = useState("");
  const [isFull, setIsFull] = useState(false);

  const handleNickNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickName(value);
    setIsFull(value.trim() !== "");
  };

  return (
    <div>
      <Header />
      <MainContainer>
        <PageTitle text="내 정보 수정하기" />
        <PageSubTitle text="새 닉네임" />
        <InputBox
          placeholder="새 닉네임을 입력하세요"
          value={nickName}
          onChange={handleNickNameChange}
        />
        <Button text="저장" isFull={isFull} />
      </MainContainer>
    </div>
  );
};

export default UserInfo;
