import styled from "@emotion/styled";

export const Container = styled.div`
  button {
    color: white;
    background-color: ${({ isSelected }) =>
      isSelected ? "var(--color-deepnavy)" : "transparent"};
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-gray);
    }
  }
`;
