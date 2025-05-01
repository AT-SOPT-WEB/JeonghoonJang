import "./styles/App.css";
import Header from "./components/Header/Header";
import { useState } from "react";
import { menus } from "./components/menu";
import GitFind from "./components/Body/GitFind/GitFind";
import NumberBase from "./components/Body/NumberBase/NumberBase";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("github");
  const selectedMenuItem = menus.find((menu) => menu.key === selectedMenu);

  return (
    <div>
      <Header
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        menus={menus}
      />
      {selectedMenu === "github" ? (
        <GitFind content={selectedMenuItem.content} />
      ) : (
        <NumberBase content={selectedMenuItem.content} />
      )}
    </div>
  );
}

export default App;
