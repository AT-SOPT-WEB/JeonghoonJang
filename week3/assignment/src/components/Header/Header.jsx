import { useState } from "react";
import Button from "../Button/Button";
import { menus } from "./menu.js";
import { Container, ButtonWrapper } from "./Header.style.js";

const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState("github");

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
