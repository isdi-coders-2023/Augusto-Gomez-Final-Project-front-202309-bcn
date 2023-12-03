import { renderHook } from "@testing-library/react";
import useMoviesApi from "../useMoviesApi";
import { providerWrapper } from "../../testUtils/testUtils";

describe("Given a useMoviesApi custom hook", () => {
  describe("When it calls its deleteMovie method with an URL and an id for the movie Arrival", () => {
    test("Then it should delete the movie Arrival from the API", async () => {
      const expectedMovieId = "65637a12d4b93a3787b660f6";
      const expectedEmptyObject = {};

      const {
        result: {
          current: { deleteMovieFromApi },
        },
      } = renderHook(() => useMoviesApi(), { wrapper: providerWrapper });

      const response = await deleteMovieFromApi(
        import.meta.env.VITE_API_URL,
        expectedMovieId,
      );

      expect(response).toStrictEqual(expectedEmptyObject);
    });
  });
});
