import { screen } from "@testing-library/react";
import { customRenderWithBrowser } from "../../testUtils/testUtils";
import AddMoviePage from "./AddMoviePage";

describe("Given an AddMoviePage component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show a 'Add your own movie' title on a heading", () => {
      const expectedTitle = "Add your own movie";

      customRenderWithBrowser(<AddMoviePage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
