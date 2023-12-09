import {
  hideBackgroundActionCreator,
  hideLoadingActionCreator,
  showBackgroundActionCreator,
  showLoadingActionCreator,
  uiReducer,
  UiStructure,
} from "./uiSlice";

describe("Given a uiReducer from a uiSlice", () => {
  describe("When it receives an initial state with a false and a showLoadingActionCreator", () => {
    test("Then it should return the new state with true", () => {
      const initialState: UiStructure = {
        isLoading: false,
        hasBackground: false,
      };

      const actualUiState = uiReducer(initialState, showLoadingActionCreator());

      expect(actualUiState.isLoading).toBeTruthy();
    });
  });

  describe("When it receives an initial state with true and a hideLoadingActionCreator", () => {
    test("Then it should return the new state with false", () => {
      const initialState: UiStructure = {
        isLoading: true,
        hasBackground: false,
      };

      const actualUiState = uiReducer(initialState, hideLoadingActionCreator());

      expect(actualUiState.isLoading).toBeFalsy();
    });
  });

  describe("When it receives an initial state with a  false and a showBackgroundActionCreator", () => {
    test("Then it should return the new state with true", () => {
      const initialState: UiStructure = {
        hasBackground: false,
        isLoading: false,
      };

      const actualUiState = uiReducer(
        initialState,
        showBackgroundActionCreator(),
      );

      expect(actualUiState.hasBackground).toBeTruthy();
    });
  });
  describe("When it receives an intial state with a true and a showBackgroundActionCreator", () => {
    test("Then it should return the new state with false", () => {
      const initialState: UiStructure = {
        hasBackground: true,
        isLoading: false,
      };

      const actualUiState = uiReducer(
        initialState,
        hideBackgroundActionCreator(),
      );

      expect(actualUiState.hasBackground).toBeFalsy();
    });
  });
});
