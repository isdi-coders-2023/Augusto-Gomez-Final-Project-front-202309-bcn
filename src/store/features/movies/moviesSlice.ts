import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "./types";

export interface MovieStructure {
  movies: Movie[];
}

const initialMovieState: MovieStructure = { movies: [] };

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMovieState,
  reducers: {
    loadMovies: (
      currentState: MovieStructure,
      action: PayloadAction<Movie[]>,
    ) => ({ ...currentState, movies: action.payload }),
  },
});

export const {
  actions: { loadMovies: loadMoviesActionCreator },
  reducer: moviesReducer,
} = moviesSlice;
