import { useState, useEffect, useRef } from "react";
import {} from "./NumberBase.style.js";
import { Container, InputBox } from "../Body.style.js";
import BaseList from "./BaseList.jsx";
import { getResult } from "../../../util/get-result.js";
import { MESSAGE } from "./Message/message.js";
import Message from "./Message/Message.jsx";

const NumberBase = ({ content }) => {
  const [input, setInput] = useState("");
  const idRef = useRef(0);
  const [randNumber, setRandNumber] = useState("");
  const [data, setData] = useState([]);
  const [isFailed, setIsFailed] = useState(false);
  const [message, setMessage] = useState(null);

  const hasDuplicate = (str) => new Set(str).size !== str.length;

  const onCreate = (guess) => {
    if (guess.length !== 3 || hasDuplicate(guess) || isNaN(Number(guess))) {
      setMessage(MESSAGE.INVALID);
      return;
    }

    const { strike, ball } = getResult(guess, randNumber);
    const isCorrect = strike === 3;

    const newData = {
      id: idRef.current++,
      guess,
      result: `${strike}S ${ball}B`,
      isCorrect,
    };

    setData((prev) => [newData, ...prev]);
    setInput("");

    if (isCorrect) {
      setMessage(MESSAGE.SUCCESS);
      setTimeout(() => {
        const newNum = randnum();
        setData([]);
        setIsFailed(false);
        setMessage(null);
        setRandNumber(newNum);
        console.log("3자리 숫자:", newNum);
      }, 3000);
    } else if (data.length + 1 >= 10) {
      setMessage(MESSAGE.FAULT);
      setIsFailed(true);
      setTimeout(() => {
        const newNum = randnum();
        setData([]);
        setIsFailed(false);
        setMessage(null);
        setRandNumber(newNum);
        console.log("3자리 숫자:", newNum);
      }, 3000);
    } else {
      setMessage({
        text: `${strike} 스트라이크 ${ball} 볼`,
        type: "default",
      });
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") onCreate(input);
  };

  const randnum = () => {
    const digits = [];
    while (digits.length < 3) {
      const rand = Math.floor(Math.random() * 10);
      if (!digits.includes(rand)) {
        if (digits.length === 0 && rand === 0) continue;
        digits.push(rand);
      }
    }
    return digits.join("");
  };

  useEffect(() => {
    const num = randnum();
    console.log("3자리 숫자:", num);
    setRandNumber(num);
  }, []);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Container>
      <InputBox
        type="text"
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
        value={input}
        placeholder={content}
      />
      {message && <Message text={message.text} type={message.type} />}
      <BaseList data={data} />
    </Container>
  );
};

export default NumberBase;
