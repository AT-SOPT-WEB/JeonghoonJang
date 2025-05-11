import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import userIcon from "../assets/user-regular.svg";

const Header = () => {
  const nav = useNavigate();
  const user = useAuth();

  return (
    <div className="flex justify-between items-center bg-blue-500 text-white text-sm px-4 py-6">
      <div className="flex gap-6">
        <button className="cursor-pointer" onClick={() => nav("/mypage/info")}>
          내 정보
        </button>
        <button
          className="cursor-pointer"
          onClick={() => nav("/mypage/search")}
        >
          SOPT 회원 조회하기
        </button>
        <button
          className="cursor-pointer"
          onClick={() => {
            localStorage.removeItem("userId");
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          로그아웃
        </button>
      </div>
      <div className="flex items-center gap-1">
        <img src={userIcon} alt="유저 아이콘" className="w-4 h-4" />
        <div>{user?.nickname || "닉네임"}</div>
      </div>
    </div>
  );
};

export default Header;
