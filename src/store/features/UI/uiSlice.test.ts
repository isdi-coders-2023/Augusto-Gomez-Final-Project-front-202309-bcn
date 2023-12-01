import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
  UiStructure,
} from "./uiSlice";

describe("Given a uiReducer from a uiSlice", () => {
  describe("When it receives an initial state with true or false and a showLoadingActionCreator", () => {
    test("Then it should return the new state with true", () => {
      const initialState: UiStructure = { isLoading: false };

      const actualUiState = uiReducer(initialState, showLoadingActionCreator());

      expect(actualUiState.isLoading).toBeTruthy();
    });
  });

  describe("When it receives an initial state with true or false and a hideLoadingActionCreator", () => {
    test("Then it should return the new state with false", () => {
      const initialState: UiStructure = { isLoading: true };

      const actualUiState = uiReducer(initialState, hideLoadingActionCreator());

      expect(actualUiState.isLoading).toBeFalsy();
    });
  });
});
