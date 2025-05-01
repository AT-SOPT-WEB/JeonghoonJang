import { Container } from "./Button.style.js";

const Button = ({ name, onClick, isSelected }) => {
  return (
    <Container isSelected={isSelected} onClick={onClick}>
      <button>{name}</button>
    </Container>
  );
};

export default Button;
