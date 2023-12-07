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
    ): MovieStructure => ({ ...currentState, movies: action.payload }),
    deleteMovie: (
      currentState: MovieStructure,
      action: PayloadAction<string>,
    ): MovieStructure => ({
      ...currentState,
      movies: currentState.movies.filter(
        (movie) => movie._id !== action.payload,
      ),
    }),
    addMovie: (
      currentState: MovieStructure,
      action: PayloadAction<Movie>,
    ): MovieStructure => ({
      ...currentState,
      movies: [...currentState.movies, action.payload],
    }),
  },
});

export const {
  actions: {
    loadMovies: loadMoviesActionCreator,
    deleteMovie: deleteMovieActionCreator,
    addMovie: addMovieActionCreator,
  },
  reducer: moviesReducer,
} = moviesSlice;
