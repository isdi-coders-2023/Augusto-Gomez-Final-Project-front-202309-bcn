import { renderHook } from "@testing-library/react";
import useMoviesApi from "../useMoviesApi";
import { providerWrapper } from "../../testUtils/testUtils";
import movieMock from "../../mocks/movieMock";

describe("Given a loadSelectedMovie method on a useMoviesApi hook", () => {
  describe("When it receives an id for the movie La La Land", () => {
    test("Then it should return the movie La La Land", async () => {
      const {
        result: {
          current: { loadSelectedMovie },
        },
      } = renderHook(() => useMoviesApi(), { wrapper: providerWrapper });

      const selectedMovie = await loadSelectedMovie(movieMock._id);

      expect(selectedMovie).toStrictEqual(movieMock);
    });
  });
});
