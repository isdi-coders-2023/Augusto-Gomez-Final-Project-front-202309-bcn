import { renderHook } from "@testing-library/react";
import useMoviesApi from "../useMoviesApi";
import { providerWrapper } from "../../testUtils/testUtils";
import { moviesMock } from "../../mocks/moviesMocks";

describe("Given a useMoviesApi custom hook", () => {
  describe("When it calls its getMovies function", () => {
    test("Then it should return the movie Arrival and La La Land", async () => {
      const {
        result: {
          current: { getMovies },
        },
      } = renderHook(() => useMoviesApi(), { wrapper: providerWrapper });

      const expectedMovies = await getMovies(import.meta.env.VITE_API_URL);

      expect(expectedMovies).toStrictEqual(moviesMock);
    });
  });
});
