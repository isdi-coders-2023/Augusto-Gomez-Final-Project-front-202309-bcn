import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../store/features/movies/moviesSlice";
import { moviesMock } from "../mocks/moviesMocks";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { uiReducer } from "../store/features/UI/uiSlice";
import { PropsWithChildren } from "react";
import { store } from "../store";
import { ToastContainer } from "react-toastify";
import { Movie } from "../store/features/movies/types";

const getMockStore = () => {
  const mockStore = configureStore({
    reducer: { moviesState: moviesReducer, uiState: uiReducer },
    preloadedState: {
      moviesState: { movies: moviesMock, selectedMovie: {} as Movie },
      uiState: { isLoading: false },
    },
  });

  return mockStore;
};

export const customRender = (children: React.ReactElement) => {
  const mockStore = getMockStore();

  render(
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};

export const mockStore = getMockStore();
export const customRenderWithBrowser = (children: React.ReactElement) => {
  render(
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <ToastContainer />
        <Provider store={mockStore}>{children}</Provider>
      </BrowserRouter>
    </ThemeProvider>,
  );
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};
