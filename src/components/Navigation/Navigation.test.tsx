import Navigation from "./Navigation";
import { screen } from "@testing-library/react";
import { customRenderWithBrowser } from "../../testUtils/testUtils";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text that says 'House navigation icon'", () => {
      const expectedAlternativeText = "House navigation icon";

      customRenderWithBrowser(<Navigation />);

      const navigationAltText = screen.getByAltText(expectedAlternativeText);

      expect(navigationAltText).toBeInTheDocument();
    });
    test("Then it should show a link with a 'to home' text", () => {
      const expectedLinkText = "Home House navigation icon";

      customRenderWithBrowser(<Navigation />);

      const expectedlink = screen.getByRole("link", { name: expectedLinkText });

      expect(expectedlink).toBeInTheDocument();
    });
  });
});
