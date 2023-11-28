import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html{
    font-family: ${({ theme }) => theme.typography.main};
  } 

  body, h1, h2, h3 {
    margin: 0;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img{
    width: 100%;
  }

  button {
    cursor: pointer;
  }

  input {
    border: none;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: inherit
  }
`;

export default GlobalStyle;
