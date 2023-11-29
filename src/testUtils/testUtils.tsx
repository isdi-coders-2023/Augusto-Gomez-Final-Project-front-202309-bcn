import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../store/features/movies/moviesSlice";
import { moviesMock } from "../mocks/moviesMocks";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { moviesState: moviesReducer },
    preloadedState: { moviesState: { movies: moviesMock } },
  });

  render(
    <ThemeProvider theme={mainTheme}>
      <Provider store={mockStore}>{children}</Provider>
    </ThemeProvider>,
  );
};

export default customRender;
