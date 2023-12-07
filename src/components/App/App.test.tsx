import { fireEvent, screen } from "@testing-library/react";
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

  describe("When it is rendered on the AddPage and you fill the form fields and click the submit button", () => {
    test("Then you should navigate to the ListPage and see a 'Our movies' title on a heading", async () => {
      const buttonText = "Add";
      const listPageHeadingText = "Our movies";
      const testText = "https://prueba.com";
      const fieldNames = [
        "Name",
        "Director",
        "Writer",
        "Stars",
        "Genre",
        "Image Url",
        "Description",
      ];
      const releaseDateLabel = "Release date";

      customRender(
        <MemoryRouter initialEntries={["/add-movie"]}>
          <App />
        </MemoryRouter>,
      );

      const addButton = screen.getByRole("button", { name: buttonText });

      const releaseDateField = screen.getByLabelText(releaseDateLabel);

      const scoreField = screen.getByRole("slider", { name: "Score" });

      for (const text of fieldNames) {
        await userEvent.type(
          screen.getByRole("textbox", { name: text }),
          testText,
        );
      }

      await fireEvent.change(releaseDateField, {
        target: { value: "2023-12-19" },
      });

      await fireEvent.change(scoreField, { target: { value: "4.0" } });

      await userEvent.click(addButton);

      const listPageHeading = await screen.findByRole("heading", {
        name: listPageHeadingText,
      });

      expect(listPageHeading).toBeInTheDocument();
    });
  });
});
