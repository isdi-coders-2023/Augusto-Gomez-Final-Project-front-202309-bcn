import { screen } from "@testing-library/react";
import customRender from "../../mocks/utils/testUtils";
import MovieList from "./MovieList";

describe("Given a MovieList component", () => {
  describe("When it is renderend on screen", () => {
    test("Then it should show a LaLaLand on a heading", () => {
      const expectedTitle = "La La Land";

      customRender(<MovieList />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
