import styled from "styled-components";

const DetailsPageStyled = styled.section`
  margin: 0px 0 190px;

  .card-background {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.light};
    align-items: center;
    border-radius: 10px;
    max-width: 280px;
    top: 171px;
    font-family: ${({ theme }) => theme.typography.secondary};
  }

  .movie-details-card {
    margin-top: -140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;

    &__image {
      object-fit: cover;
      bottom: 124px;
      border-radius: 8px;
      box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.8);
    }

    &__title-container {
      text-overflow: ellipsis;
      word-wrap: break-word;
      display: flex;
      align-items: center;
    }

    &__text-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 4px;
    }

    &__field {
      display: flex;
      gap: 20px;
      word-break: break-word;
    }

    &__descriptor {
      font-weight: 700;
      word-break: auto-phrase;
    }

    &__description {
      margin: 10px;
    }

    &__button-container {
      display: flex;
      gap: 62px;
    }
  }

  .title-container {
    &__score {
      position: relative;
      left: 5%;
    }
  }

  .release-date-field {
    margin: 20px 0;
  }
`;

export default DetailsPageStyled;
