import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered on screen on the HomePage", () => {
    test("Then you should see a title 'Our movies' title on a heading", () => {
      const expectedTitle = "Our movies";

      render(
        <MemoryRouter initialEntries={["/home"]}>
          <App />
        </MemoryRouter>,
      );

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
