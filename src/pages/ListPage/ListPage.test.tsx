import { screen } from "@testing-library/react";
import ListPage from "./ListPage";
import { customRenderWithBrowser } from "../../testUtils/testUtils";

describe("Given a ListPage component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show 'Our movies' title on a heading", () => {
      const expectedTitle = "Our movies";

      customRenderWithBrowser(<ListPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
