import styled from "styled-components";

const ListPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .list-page {
    &__title-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }
`;

export default ListPageStyled;
