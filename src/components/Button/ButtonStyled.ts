import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 90px;
  border-radius: 6px;
  align-self: end;
  background-color: ${({ theme }) => theme.colors.modify};
  font-size: 16px;
  border: none;
  font-weight: 600;
  line-height: 24px;
  padding: 0;
  min-height: 48px;

  &.button {
    &--delete {
      background-color: #ff6565;
    }

    &--details {
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
      width: inherit;
    }
  }
`;

export default ButtonStyled;
