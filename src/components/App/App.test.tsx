import { fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { customRender } from "../../testUtils/testUtils";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/msw/node";
import { errorHandlers } from "../../mocks/msw/errorHandlers";

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
    test("Then you should navigate to the ListPage and see a 'Our movies' title on a heading and a 'Sucess! You have added your own movie' feedback message", async () => {
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

      const feedbackMessage = await screen.getByText(
        "Sucess! You have added your own movie",
      );

      expect(listPageHeading).toBeInTheDocument();
      expect(feedbackMessage).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the MovieCard's detail button and the request for the selected card fails", () => {
    test("Then it should show a feedback component with a 'Error! Failed to select a movie' message", async () => {
      server.use(errorHandlers[3]);

      const buttonText = "Details";
      const errorFeedbackMessage = "Error! Failed to select a movie";

      customRender(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );

      const button = screen.getAllByRole("button", { name: buttonText });

      await userEvent.click(button[0]);

      const expectedErrorFeedback =
        await screen.findByText(errorFeedbackMessage);

      await waitFor(() => expect(expectedErrorFeedback).toBeInTheDocument());
    });
  });
});
