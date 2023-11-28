import { ThemeProvider } from "styled-components";
import Navigation from "./Navigation";
import { render, screen } from "@testing-library/react";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text that says 'House navigation icon'", () => {
      const expectedAlternativeText = "House navigation icon";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const navigationAltText = screen.getByAltText(expectedAlternativeText);

      expect(navigationAltText).toBeInTheDocument();
    });
  });
});
