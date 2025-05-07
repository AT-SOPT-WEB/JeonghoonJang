import Button from "./Button/Button.jsx";
import { Container, ButtonWrapper } from "./Header.style.js";

const Header = ({ selectedMenu, setSelectedMenu, menus }) => {
  return (
    <Container>
      <h1>숫자야구 || 깃허브 검색</h1>
      <ButtonWrapper>
        {menus.map((menu) => (
          <Button
            key={menu.key}
            name={menu.name}
            onClick={() => setSelectedMenu(menu.key)}
            isSelected={selectedMenu === menu.key}
          />
        ))}
      </ButtonWrapper>
    </Container>
  );
};

export default Header;
