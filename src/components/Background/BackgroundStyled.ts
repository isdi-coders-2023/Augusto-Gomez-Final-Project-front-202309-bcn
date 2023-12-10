import styled from "styled-components";

const BackgroundStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;

  .background {
    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(5px);
      z-index: -1;
      position: fixed;
    }

    &__gradient {
      height: 100%;
      background: linear-gradient(#ffffff 30%, #5e607b00);
    }
  }
`;

export default BackgroundStyled;
