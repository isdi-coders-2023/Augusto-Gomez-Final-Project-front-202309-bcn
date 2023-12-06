import userEvent from "@testing-library/user-event";
import { customRenderWithBrowser } from "../../testUtils/testUtils";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered on screen and the user inputs a 'Hello world' message in a form control for name", () => {
    test("Then it should show that text on an form control", async () => {
      const expectedInputValue = "Hello world";

      customRenderWithBrowser(<Form />);

      const nameInput = screen.getByRole("textbox", { name: "Name" });

      await userEvent.type(nameInput, expectedInputValue);

      await waitFor(() => {
        expect(nameInput).toHaveValue(expectedInputValue);
      });
    });
  });

  describe("When it is rendered on screen and the user selects '4.0' as a score", () => {
    test("Then it should show that number on a number by the score", async () => {
      customRenderWithBrowser(<Form />);

      const scoreInput = await screen.findByRole("slider", { name: "Score" });
      const scoreOutput = screen.getByRole("status");

      await fireEvent.change(scoreInput, { target: { value: "4.0" } });

      await waitFor(() => {
        expect(scoreOutput).toHaveValue("4.0");
      });
    });
  });

  describe("When it is rendered on screen and the user checks the seen checkbox", () => {
    test("Then it should show the checkbox as checked", async () => {
      const inputName = "Seen";

      customRenderWithBrowser(<Form />);

      const checkedInput = await screen.getByRole("checkbox", {
        name: inputName,
      });

      await userEvent.click(checkedInput);

      expect(checkedInput).toBeChecked();
    });
  });
});
