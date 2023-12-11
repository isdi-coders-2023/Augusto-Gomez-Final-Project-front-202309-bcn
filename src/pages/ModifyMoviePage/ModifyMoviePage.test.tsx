import { screen } from "@testing-library/react";
import { customRenderWithBrowser } from "../../testUtils/testUtils";
import ModifyMoviePage from "./ModifyMoviePage";

describe("Given a ModifyMoviePage component", () => {
  describe("Wyhen it is rendered on screen", () => {
    test("Then it should show a 'Modify a movie' title on a heading", () => {
      const title = "Modify a movie";

      customRenderWithBrowser(<ModifyMoviePage />);

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
