import Button from "../../components/Button";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import MainContainer from "../../components/MainContainer";
import PageSubTitle from "../../components/PageSubTitle";
import PageTitle from "../../components/PageTitle";
import { useState } from "react";

const UserSearch = () => {
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
        <PageTitle text="SOPT회원 조회하기" />
        <PageSubTitle text="닉네임" />
        <InputBox
          placeholder="검색할 닉네임을 입력하세요."
          value={nickName}
          onChange={handleNickNameChange}
        />
        <Button text="확인" isFull={isFull} />
      </MainContainer>
    </div>
  );
};

export default UserSearch;
