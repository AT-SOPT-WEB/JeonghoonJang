import userIcon from "../assets/user-regular.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-500 text-white text-sm px-4 py-6">
      <div className="flex gap-6">
        <button>내 정보</button>
        <button>SOPT 회원 조회하기</button>
        <button>로그아웃</button>
      </div>
      <div className="flex items-center gap-1">
        <img src={userIcon} alt="유저 아이콘" className="w-4 h-4" />
        <div>이름</div>
      </div>
    </div>
  );
};

export default Header;
