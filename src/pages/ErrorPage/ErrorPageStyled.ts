import styled from "styled-components";

const ErrorPageStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  .error-page {
    &__title {
      font-size: 40px;
      font-weight: 400;
      width: 269px;
      text-align: center;
      margin-top: 60px;
      margin-bottom: -10px;
    }
  }
`;

export default ErrorPageStyled;
