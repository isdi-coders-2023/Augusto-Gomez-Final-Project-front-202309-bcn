import { screen, renderHook } from "@testing-library/react";
import useMoviesApi from "../useMoviesApi";
import { customRender, providerWrapper } from "../../testUtils/testUtils";
import extendedMovieMocks from "../../mocks/extendedMovieMocks";
import { server } from "../../mocks/msw/node";
import { errorHandlers } from "../../mocks/msw/errorHandlers";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App/App";

describe("Given a useMoviesApi custom hook", () => {
  const newMovie = extendedMovieMocks[2];

  describe("When it calls its addMovie method with a movie Superbad", () => {
    test("Then it should receive the Superbad movie from the API rest", async () => {
      const {
        result: {
          current: { addMovie },
        },
      } = renderHook(() => useMoviesApi(), { wrapper: providerWrapper });

      const response = await addMovie(newMovie);

      expect(response).toStrictEqual(newMovie);
    });
  });

  describe("When it calls its addMovie method with a movie Superbad and the response fails", () => {
    test("Then it should show a 'Error! Failed to add a movie' message on a Toast", async () => {
      server.use(...errorHandlers);

      const errorMessage = "Error! Failed to add movie";

      customRender(
        <MemoryRouter initialEntries={["/add-movie"]}>
          <App />
        </MemoryRouter>,
      );

      const {
        result: {
          current: { addMovie },
        },
      } = renderHook(() => useMoviesApi(), { wrapper: providerWrapper });

      await addMovie(extendedMovieMocks[2]);
      const errorFeedback = await screen.findByText(errorMessage);

      expect(errorFeedback).toBeInTheDocument();
    });
  });
});
