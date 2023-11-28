import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation-bar {
    &__container {
      display: flex;
      gap: 50px;
      margin-top: 60px;
    }

    &__link {
      display: flex;
      flex-direction: column-reverse;
      gap: 6px;
      padding: 20px;
      width: 122px;
      align-items: center;
      padding: 20px;
      border-radius: 35px;
    }

    &__text {
      font-family: ${({ theme }) => theme.typography.secondary};
      font-weight: 500;
    }
  }

  .active {
    background-color: #d9d9d9;
  }
`;

export default NavigationStyled;
