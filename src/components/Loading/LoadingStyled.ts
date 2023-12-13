import styled from "styled-components";

const LoadingStyled = styled.div`
  background-color: #000c;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  .loading {
    &__text {
      font-size: 40px;
      color: ${({ theme }) => theme.colors.light};
      font-family: ${({ theme }) => theme.typography.tertiary};
    }
  }

  @media (prefers-reduced-motion) {
    .loading__icon {
      display: none;
    }
  }
`;

export default LoadingStyled;
