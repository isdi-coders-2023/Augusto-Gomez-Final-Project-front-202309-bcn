import { screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import movieMock from "../../mocks/movieMock";
import customRender from "../../testUtils/testUtils";

describe("Given a MovieCard component", () => {
  describe("When it is rendered on screen and it receives a movie Arrival", () => {
    test("Then it should show 'Cover of Arrival' alternative text", () => {
      const expectedAlternativeText = "Cover of Arrival";

      customRender(<MovieCard movie={movieMock} />);

      const expectedImage = screen.getByAltText(expectedAlternativeText);

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show 'Arrival' text on a heading", () => {
      const expectedTitle = "Arrival";

      customRender(<MovieCard movie={movieMock} />);

      const expectedImage = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show '2016' on a text", () => {
      const expectedText = "2016";

      customRender(<MovieCard movie={movieMock} />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
