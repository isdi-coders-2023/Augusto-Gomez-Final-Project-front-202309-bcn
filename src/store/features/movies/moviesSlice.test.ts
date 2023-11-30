import { moviesMock } from "../../../mocks/moviesMocks";
import {
  MovieStructure,
  loadMoviesActionCreator,
  moviesReducer,
} from "./moviesSlice";

describe("Given a loadMovies reducer on a moviesSlice", () => {
  describe("When it receives a currentState and the movies La La Land and Arrival", () => {
    test("Then it should return the new state with the movies LaLaLand and Arrival", () => {
      const initialState: MovieStructure = { movies: [] };

      const actualMoviesState = moviesReducer(
        initialState,
        loadMoviesActionCreator(moviesMock),
      );

      expect(actualMoviesState.movies).toStrictEqual(moviesMock);
    });
  });
});
