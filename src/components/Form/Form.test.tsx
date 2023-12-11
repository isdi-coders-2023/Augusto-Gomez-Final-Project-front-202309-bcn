import userEvent from "@testing-library/user-event";
import { customRenderWithBrowser } from "../../testUtils/testUtils";
import { fireEvent, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  const formAction = vi.fn();

  describe("When it is rendered on screen and the user inputs a 'Hello world' message in a form control for name", () => {
    test("Then it should show that text on an form control", async () => {
      const expectedInputValue = "Hello world";

      customRenderWithBrowser(
        <Form formFunction={formAction} buttonText="Add" />,
      );

      const nameInput = screen.getByRole("textbox", { name: "Name" });

      await userEvent.type(nameInput, expectedInputValue);

      expect(nameInput).toHaveValue(expectedInputValue);
    });
  });

  describe("When it is rendered on screen and the user selects '4.0' as a score", () => {
    test("Then it should show that number on a number by the score", async () => {
      const expectedValue = "4.0";

      customRenderWithBrowser(
        <Form formFunction={formAction} buttonText="Add" />,
      );

      const scoreInput = await screen.findByRole("slider", {
        name: "Score 2.5",
      });

      await fireEvent.change(scoreInput, { target: { value: expectedValue } });

      expect(scoreInput).toHaveValue(expectedValue);
    });
  });

  describe("When it is rendered on screen and the user checks the seen checkbox", () => {
    test("Then it should show the checkbox as checked", async () => {
      const inputName = "Seen";

      customRenderWithBrowser(
        <Form formFunction={formAction} buttonText="Add" />,
      );

      const checkedInput = await screen.getByRole("checkbox", {
        name: inputName,
      });

      await userEvent.click(checkedInput);

      expect(checkedInput).toBeChecked();
    });
  });

  describe("When it is rendered on screen and the user fills all form fields", () => {
    test("Then the 'Add' button should be enabled", async () => {
      const buttonText = "Add";
      const testText = "https://prueba.com";
      const fieldNames = [
        "Name",
        "Director",
        "Writer",
        "Starring",
        "Genre",
        "Image Url",
        "Description",
      ];

      const releaseDateLabel = "Release date";

      customRenderWithBrowser(
        <Form formFunction={formAction} buttonText="Add" />,
      );

      const addButton = screen.getByRole("button", { name: buttonText });

      const releaseDateField = screen.getByLabelText(releaseDateLabel);

      const scoreField = screen.getByRole("slider", { name: "Score 2.5" });

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

      expect(addButton).not.toBeDisabled();
    });
  });
});
