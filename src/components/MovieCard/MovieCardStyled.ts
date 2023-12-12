import styled from "styled-components";

const MovieCardStyled = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.dark};
  margin-bottom: 20px;
  padding: 14px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-weight: 500;
  letter-spacing: -0.5px;
  margin-top: -20px;

  .movie-card {
    &__image {
      border-radius: 8px;
      object-fit: cover;
    }

    &__title-container {
      display: flex;
      justify-content: space-between;
    }

    &__title {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      max-width: 124px;
    }

    &__button-container {
      display: flex;
      justify-content: space-between;
      margin: 0 11px;
    }

    &__control {
      accent-color: transparent;
    }

    &__label {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      gap: 5px;
    }
  }

  .checkbox-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export default MovieCardStyled;
