import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../store/features/movies/moviesSlice";
import { moviesMock } from "../mocks/moviesMocks";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

export const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { moviesState: moviesReducer },
    preloadedState: { moviesState: { movies: moviesMock } },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};

export const customRenderWithBrowser = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { moviesState: moviesReducer },
    preloadedState: { moviesState: { movies: moviesMock } },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Provider store={mockStore}>{children}</Provider>
      </BrowserRouter>
    </ThemeProvider>,
  );
};
