import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";

describe("Given an App component", () => {
  describe("When it is rendered on screen on the HomePage", () => {
    test("Then you should see a title 'Our movies' title on a heading", () => {
      const expectedTitle = "Our movies";

      render(
        <MemoryRouter initialEntries={["/home"]}>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </MemoryRouter>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
