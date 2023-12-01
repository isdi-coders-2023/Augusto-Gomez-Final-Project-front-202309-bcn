import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("Given an ErrorPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show on screen a 'Page not found' title on a heding", () => {
      const expectedTitle = "Page not found";

      render(<ErrorPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then it should show on screen an image with a 'Cut cinema reel drawing' alternative text", () => {
      const expectedAlternativeText = "Cut cinema reel drawing";

      render(<ErrorPage />);

      const title = screen.getByAltText(expectedAlternativeText);

      expect(title).toBeInTheDocument();
    });
  });
});
