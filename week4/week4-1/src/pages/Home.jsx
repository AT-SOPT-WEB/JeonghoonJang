import { Link, Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>포켓몬 도감</h1>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        <Link to="/pokemon/피카츄">피카츄</Link>
        <Link to="/pokemon/이상해씨">이상해씨</Link>
      </nav>
    </div>
  );
};

export default Home;
