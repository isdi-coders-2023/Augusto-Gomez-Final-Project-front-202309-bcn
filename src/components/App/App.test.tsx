import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { customRender } from "../../testUtils/testUtils";
import userEvent from "@testing-library/user-event";

describe("Given an App component", () => {
  describe("When it is rendered on screen on the HomePage", () => {
    test("Then you should see a title 'Our movies' title on a heading", () => {
      const expectedTitle = "Our movies";

      customRender(
        <MemoryRouter initialEntries={["/home"]}>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </MemoryRouter>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then you should see an 'Arrival' text in a heading on a card", () => {
      const expectedTitle = "Arrival";

      customRender(
        <MemoryRouter initialEntries={["/home"]}>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </MemoryRouter>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then you should see a 'Cover of La La Land' alternative text on an image in a card", () => {
      const expectedAlternativeText = "Cover of La La Land";

      customRender(
        <MemoryRouter initialEntries={["/home"]}>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </MemoryRouter>,
      );

      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it is rendered and you navigate to the AddPage", () => {
    test("Then it should show the AddPage with 'Add your own movie' message", async () => {
      const addMoviePageLinkText = "Add movie Add movie navigation icon";
      const addMoviePageHeadingText = "Add your own movie";

      customRender(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const addMoviePageLink = screen.getByRole("link", {
        name: addMoviePageLinkText,
      });

      await userEvent.click(addMoviePageLink);

      const addMoviePageHeading = await screen.findByRole("heading", {
        name: addMoviePageHeadingText,
      });

      expect(addMoviePageHeading).toBeInTheDocument();
    });
  });
});
