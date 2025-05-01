import { ButtonContainer } from "./Button.style.js";

const Button = ({ name, onClick, isSelected }) => {
  return (
    <ButtonContainer isSelected={isSelected} onClick={onClick}>
      {name}
    </ButtonContainer>
  );
};

export default Button;
