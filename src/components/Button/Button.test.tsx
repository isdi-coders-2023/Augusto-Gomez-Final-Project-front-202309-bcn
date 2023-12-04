import Button from "./Button";
import { customRenderWithBrowser } from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  const mockAction = vi.fn();
  const expectedText = "See details";

  describe("When it receives a 'See details' text", () => {
    test("Then it should a text 'See details' on a button on screen", () => {
      customRenderWithBrowser(
        <Button text={expectedText} type="button" modifier="button--delete" />,
      );

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an action and a click from the user", () => {
    test("Then it should call the received function one time", async () => {
      customRenderWithBrowser(
        <Button text={expectedText} type="button" actionOnClick={mockAction} />,
      );

      const button = screen.getByRole("button", { name: expectedText });

      await userEvent.click(button);

      expect(mockAction).toHaveBeenCalledOnce();
    });
  });
});
