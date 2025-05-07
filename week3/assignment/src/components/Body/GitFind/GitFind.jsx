import { Resolved, Follow, CloseButton, Spinner } from "./GitFind.style.js";
import { Container, InputBox } from "../Body.style.js";
import { useState, useEffect } from "react";
import LatestSearch from "./LatestSearch/LatestSearch.jsx";

const GitFind = ({ content }) => {
  const [input, setInput] = useState("");
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("latestSearches") || "[]");
    setLatest(stored);
  }, []);

  const saveLatestSearch = (name) => {
    if (latest.includes(name)) return;

    const updated = [...latest.filter((item) => item !== name), name].slice(-3);
    setLatest(updated);
    localStorage.setItem("latestSearches", JSON.stringify(updated));
  };

  const onDeleteItem = (name) => {
    const updated = latest.filter((item) => item !== name);
    setLatest(updated);
    localStorage.setItem("latestSearches", JSON.stringify(updated));
  };

  const getUserInfo = async (user) => {
    setUserInfo({ status: "pending", data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) throw new Error("Network response wasnot ok");
      const data = await response.json();
      setUserInfo({ status: "resolved", data });
      saveLatestSearch(user);
    } catch {
      setUserInfo({ status: "rejected", data: null });
    }
  };

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") getUserInfo(input);
  };

  return (
    <Container>
      <InputBox
        type="text"
        value={input}
        onChange={onChangeInput}
        placeholder="github 아이디"
        onKeyDown={onKeyDown}
      />

      {userInfo.status === "resolved" && (
        <>
          <LatestSearch
            items={latest}
            onClickItem={getUserInfo}
            onDeleteItem={onDeleteItem}
          />
          <Resolved>
            <CloseButton
              onClick={() => setUserInfo({ status: "idle", data: null })}
            >
              X
            </CloseButton>
            <a href={userInfo.data.html_url} target="_blank">
              <img src={userInfo.data.avatar_url} />
            </a>
            <a href={userInfo.data.html_url} target="_blank">
              <p>{userInfo.data.name}</p>
            </a>
            <p style={{ fontSize: "13px", color: "var(--color-gray)" }}>
              {userInfo.data.login}
            </p>
            <p>{userInfo.data.bio}</p>

            <Follow>
              <div>
                <div>Followers</div>
                <div>{userInfo.data.followers}</div>
              </div>
              <div>
                <div>Following</div>
                <div>{userInfo.data.following}</div>
              </div>
            </Follow>
          </Resolved>
        </>
      )}
      {userInfo.status === "rejected" && (
        <div>
          <p>결과를 찾을 수 없습니다. 다시 시도해 주세요.</p>
        </div>
      )}
      {userInfo.status === "pending" && <Spinner />}
    </Container>
  );
};

export default GitFind;
