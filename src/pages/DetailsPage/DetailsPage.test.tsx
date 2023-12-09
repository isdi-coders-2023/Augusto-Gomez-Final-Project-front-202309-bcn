import { screen } from "@testing-library/react";
import movieMock from "../../mocks/movieMock";
import { customRenderWithBrowser } from "../../testUtils/testUtils";
import DetailsPage from "./DetailsPage";

describe("Given a DetailsPage component", () => {
  describe("When it is rendered on screen", () => {
    test("Then it should show an image with an alternative text 'Cover of Arrival'", () => {
      const alternativeText = "Cover of Arrival";

      customRenderWithBrowser(<DetailsPage />, movieMock);

      const expectedImage = screen.getByAltText(alternativeText);

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a 'Arrival' text on a heading", () => {
      const title = "Arrival";

      customRenderWithBrowser(<DetailsPage />, movieMock);

      const expectedHeading = screen.getByRole("heading", { name: title });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  test("Then it should button with a 'Delete' text", () => {
    const buttonText = "Delete";

    customRenderWithBrowser(<DetailsPage />, movieMock);

    const expectedButton = screen.getByRole("button", { name: buttonText });

    expect(expectedButton).toBeInTheDocument();
  });
});
