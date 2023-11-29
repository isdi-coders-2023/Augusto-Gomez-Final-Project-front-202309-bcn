import { screen } from "@testing-library/react";
import customRender from "../../testUtils/testUtils";
import MovieList from "./MovieList";

describe("Given a MovieList component", () => {
  describe("When it is renderend on screen", () => {
    test("Then it should show a 'Cover of La La Land' on an image's alternative text", () => {
      const expectedAlternativeText = "Cover of La La Land";

      customRender(<MovieList />);

      const expectedImage = screen.getByAltText(expectedAlternativeText);
      expect(expectedImage).toBeInTheDocument();
    });
  });
});
