import Button from "../../components/Button";
import Header from "../../components/Header";
import InputBox from "../../components/InputBox";
import MainContainer from "../../components/MainContainer";
import PageSubTitle from "../../components/PageSubTitle";
import PageTitle from "../../components/PageTitle";
import { useState } from "react";
import { searchNicknames } from "../../apis/user";

const UserSearch = () => {
  const [nickName, setNickName] = useState("");
  const [isFull, setIsFull] = useState(false);
  const [userList, setUserList] = useState<string[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickName(value);
    setIsFull(value.trim() !== "");
  };

  const handleSubmit = async () => {
    try {
      const data = await searchNicknames(nickName);
      setUserList(data);
      setIsSearched(true);
    } catch (e) {
      alert("검색 결과가 없습니다.");
      setIsSearched(true);
    }
  };

  return (
    <div>
      <Header />
      <MainContainer>
        <PageTitle text="SOPT회원 조회하기" />
        <PageSubTitle text="닉네임" />
        <InputBox
          type="text"
          placeholder="검색할 닉네임을 입력하세요."
          value={nickName}
          onChange={handleSearchChange}
        />
        <Button text="확인" isFull={isFull} onClick={handleSubmit} />
        <ul className="mt-4 space-y-2">
          {userList.length > 0
            ? userList.map((user) => <li key={user}>{user}</li>)
            : isSearched && <li>검색 결과가 없습니다.</li>}
        </ul>
      </MainContainer>
    </div>
  );
};

export default UserSearch;
