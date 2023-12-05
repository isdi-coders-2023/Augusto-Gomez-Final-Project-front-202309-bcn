import styled from "styled-components";

const TitleStyled = styled.h1`
  text-align: center;
  max-width: 400px;
  font-size: 50px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 10px;

  &:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 60%;
    padding-top: 15px;
    border-bottom: 1px solid black;
    border-width: 6px;
  }
`;

export default TitleStyled;
