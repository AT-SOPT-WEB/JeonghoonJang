import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Resolved = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  padding: 20px;
  border-radius: 15px;
  background-color: var(--color-deepnavy);
  color: white;
  align-items: center;
  gap: 10px;

  a {
    padding: 15px;
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
    border: 2px solid white;

    &:hover {
      transform: scale(1.15);
    }
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  border: none;
  background: none;
  font-size: 18px;
  color: white;
  cursor: pointer;

  &:hover {
    color: tomato;
  }
`;

export const Follow = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0px;
    border-radius: 15px;
    background-color: var(--color-light-navy);
    gap: 10px;
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-light-navy);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 40px auto;
`;
