import styled from "styled-components";

const HeaderStyled = styled.header`
  max-width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .main-header {
    &__logo {
      max-width: 197px;
    }
  }
`;

export default HeaderStyled;
