import { screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import movieMock from "../../mocks/movieMock";
import { customRenderWithBrowser } from "../../testUtils/testUtils";
import * as hooks from "../../store/hooks";
import userEvent from "@testing-library/user-event";
import {
  AnyAction,
  CombinedState,
  Dispatch,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { MovieStructure } from "../../store/features/movies/moviesSlice";
import { UiStructure } from "../../store/features/UI/uiSlice";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a MovieCard component", () => {
  describe("When it is rendered on screen and it receives a movie Arrival", () => {
    test("Then it should show 'Cover of Arrival' alternative text", () => {
      const expectedAlternativeText = "Cover of Arrival";

      customRenderWithBrowser(<MovieCard movie={movieMock} />);

      const expectedImage = screen.getByAltText(expectedAlternativeText);

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show 'Arrival' text on a heading", () => {
      const expectedTitle = "Arrival";

      customRenderWithBrowser(<MovieCard movie={movieMock} />);

      const expectedImage = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show '2016' on a text", () => {
      const expectedText = "2016";

      customRenderWithBrowser(<MovieCard movie={movieMock} />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it is rendered on screen and receives a movie Arrival and a click to delete it", () => {
    test("Then it should delete the Arrival movie", async () => {
      const expectedButtonName = "Delete";

      const dispatch = vi.fn().mockResolvedValue(Promise.resolve());

      vi.spyOn(hooks, "useAppDispatch").mockReturnValue(
        dispatch as unknown as ThunkDispatch<
          CombinedState<{ moviesState: MovieStructure; uiState: UiStructure }>,
          undefined,
          AnyAction
        > &
          Dispatch<AnyAction>,
      );

      customRenderWithBrowser(<MovieCard movie={movieMock} />);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      await userEvent.click(deleteButton);

      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({ payload: movieMock._id }),
      );
    });
  });
});
