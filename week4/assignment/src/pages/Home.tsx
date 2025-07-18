import { useNavigate } from "react-router";
import MainContainer from "../components/MainContainer";
import Button from "../components/Button";

const Home = () => {
  const nav = useNavigate();
  return (
    <MainContainer>
      <Button
        text="Login으로 이동"
        onClick={() => nav("/login")}
        isFull={true}
      />
    </MainContainer>
  );
};

export default Home;
