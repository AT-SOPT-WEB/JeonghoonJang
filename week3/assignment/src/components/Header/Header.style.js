import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  background-color: var(--color-navy);
  color: white;
  justify-content: center;
  align-items: center;
  gap: 16px;

  h1 {
    font-size: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
