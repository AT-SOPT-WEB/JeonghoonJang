import styled from "@emotion/styled";

export const SearchList = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 10px;

  p {
    font-weight: bold;
    margin-bottom: 5px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-gray);
  border-radius: 20px;
  padding: 4px 8px;
  gap: 6px;

  button {
    background: none;
    border: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }

  span {
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      color: tomato;
    }
  }
`;
