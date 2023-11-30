import styled from "styled-components";

const LoadingStyled = styled.div`
  background-color: #000c;
  width: 100%;
  height: 100%;
  position: fixed;
  .loading {
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 300px;
    }

    &__text {
      font-size: 40px;
      color: ${({ theme }) => theme.colors.light};
      font-family: ${({ theme }) => theme.typography.tertiary};
    }
  }
`;

export default LoadingStyled;
