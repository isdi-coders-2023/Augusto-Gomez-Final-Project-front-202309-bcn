import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../../store/features/movies/moviesSlice";
import { moviesMock } from "../movieMocks";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: { movieState: moviesReducer },
    preloadedState: { movieState: { movies: moviesMock } },
  });

  render(<Provider store={mockStore}>{children}</Provider>);
};

export default customRender;
