import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is renderen on screen", () => {
    test("Then it should show a text flixpicks logo on black letters 'flixpicks logo on black letters' on an alternative text", () => {
      const expectedAlternativeText = "flixpicks logo on black letters";

      render(<Header />);

      const alternativeText = screen.getByAltText(expectedAlternativeText);

      expect(alternativeText).toBeInTheDocument();
    });
  });
});
