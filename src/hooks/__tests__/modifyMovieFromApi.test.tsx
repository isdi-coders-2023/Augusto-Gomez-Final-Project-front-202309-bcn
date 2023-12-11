import { renderHook } from "@testing-library/react";
import useMoviesApi from "../useMoviesApi";
import { providerWrapper } from "../../testUtils/testUtils";
import movieMock from "../../mocks/movieMock";
import { modifiedMoviesMock } from "../../mocks/moviesMocks";

describe("Given a modifyMovieFromApi function on a useMoviesApi", () => {
  describe("When it receives an id for the movie Arrival", () => {
    test("Then it should return the movie Arrival modified", async () => {
      const {
        result: {
          current: { modifyMovieFromApi },
        },
      } = renderHook(() => useMoviesApi(), { wrapper: providerWrapper });

      const movie = await modifyMovieFromApi(movieMock, movieMock._id);

      expect(movie).toStrictEqual(modifiedMoviesMock[0]);
    });
  });
});
