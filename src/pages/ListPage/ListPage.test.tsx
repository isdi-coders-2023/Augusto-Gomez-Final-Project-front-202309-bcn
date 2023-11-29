import { screen } from "@testing-library/react";
import ListPage from "./ListPage";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import customRender from "../../mocks/utils/testUtils";

describe("Given a ListPage component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show 'Our movies' title on a heading", () => {
      const expectedTitle = "Our movies";

      customRender(
        <ThemeProvider theme={mainTheme}>
          <ListPage />
        </ThemeProvider>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
