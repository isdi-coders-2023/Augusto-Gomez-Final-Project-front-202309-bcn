import { render, screen } from "@testing-library/react";
import ListPage from "./ListPage";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given a ListPage component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show 'Our movies' title on a heading", () => {
      const expectedTitle = "Our movies";

      render(
        <ThemeProvider theme={mainTheme}>
          <ListPage />
        </ThemeProvider>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
