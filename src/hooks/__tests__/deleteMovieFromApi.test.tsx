import { renderHook } from "@testing-library/react";
import useMoviesApi from "../useMoviesApi";
import { providerWrapper } from "../../testUtils/testUtils";

describe("Given a useMoviesApi custom hook", () => {
  describe("When it calls its deleteMovie method with an URL and an id for the movie Arrival", () => {
    const expectedMovieId = "65637a12d4b93a3787b660f7";

    const {
      result: {
        current: { deleteMovieFromApi },
      },
    } = renderHook(() => useMoviesApi(), { wrapper: providerWrapper });

    test("Then it should delete the movie Arrival from the API", async () => {
      const expectedEmptyObject = {};

      const response = await deleteMovieFromApi(expectedMovieId);

      expect(response).toStrictEqual(expectedEmptyObject);
    });
  });
});
