import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  gap: 10px;
`;

export const InputBox = styled.input`
  text-align: center;

  background-color: var(--color-light-navy);
  width: 400px;
  padding: 10px;
  border: inherit;
  border-radius: 10px;

  &::placeholder {
    color: white;
  }
`;
