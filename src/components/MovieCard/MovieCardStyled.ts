import styled from "styled-components";

const MovieCardStyled = styled.article`
  border: 1px solid #f2f2f2;
  margin-bottom: 20px;
  padding: 14px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: ${({ theme }) => theme.typography.secondary};
  font-weight: 500;
  letter-spacing: -0.5px;

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
  }
`;

export default MovieCardStyled;
