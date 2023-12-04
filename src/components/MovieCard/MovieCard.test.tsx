import { screen, waitFor } from "@testing-library/react";
import MovieCard from "./MovieCard";
import movieMock from "../../mocks/movieMock";
import { customRenderWithBrowser } from "../../testUtils/testUtils";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/msw/node";
import { errorHandlers } from "../../mocks/msw/errorHandlers";

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
    const expectedButtonName = "Delete";

    test("Then it should delete the Arrival movie", async () => {
      customRenderWithBrowser(<MovieCard movie={movieMock} />);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      const movieTitle = screen.getByRole("heading", { name: "Arrival" });

      await userEvent.click(deleteButton);

      waitFor(() => {
        expect(movieTitle).not.toBeInTheDocument();
      });
    });

    test("Then it should show a feedback message with 'Success! You have deleted a movie' ", async () => {
      customRenderWithBrowser(<MovieCard movie={movieMock} />);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      await userEvent.click(deleteButton);

      expect(
        screen.getByText("Success! You have deleted a movie"),
      ).toBeInTheDocument();
    });

    test("Then the promise is rejected then it should show a feedback message with 'Success! You have deleted a movie'", async () => {
      server.use(...errorHandlers);

      customRenderWithBrowser(<MovieCard movie={movieMock} />);

      const deleteButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      await userEvent.click(deleteButton);

      await waitFor(() => {
        expect(
          screen.getByText("Error! Failed to delete a movie"),
        ).toBeInTheDocument();
      });
    });
  });
});
