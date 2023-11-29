import styled from "styled-components";

const ButtonStyled = styled.button`
  min-height: 48px;
  align-self: end;
  border-radius: 24px;
  padding: 8px 16px;
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.colors.dark};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.5px;
  font-family: inherit;
`;

export default ButtonStyled;
