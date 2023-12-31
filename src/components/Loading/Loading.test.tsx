import { screen } from "@testing-library/react";
import Loading from "./Loading";
import { customRenderWithBrowser } from "../../testUtils/testUtils";

describe("Given a Loading component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show 'Loading icon' as an alternative text", () => {
      const expectedAlternativeText = "Loading icon";

      customRenderWithBrowser(<Loading />);

      const alternativeText = screen.getByAltText(expectedAlternativeText);

      expect(alternativeText).toBeInTheDocument();
    });
  });
});
