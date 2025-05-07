import { useNavigate } from "react-router";

const Home = () => {
  const nav = useNavigate();
  return (
    <div>
      <button className="cursor-pointer" onClick={() => nav("/login")}>
        Login으로 이동
      </button>
    </div>
  );
};

export default Home;
