import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  background-color: ${({ theme }) => theme.colors.formBackground};
  padding: 16px;
  border-radius: 8px;
  max-width: 260px;
  gap: 10px;

  .add-movie-form {
    &__label {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    &__control {
      height: 40px;
      border-radius: 6px;
      border: 1px solid;
      background-color: ${({ theme }) => theme.colors.background};
      padding: 8px;
      font-size: 16px;
    }
  }

  .score {
    display: flex;
    gap: 17px;

    &__label {
      position: relative;
    }

    &__value {
      position: absolute;
      left: 60px;
    }
  }

  #description {
    height: 240px;
  }
`;

export default FormStyled;
