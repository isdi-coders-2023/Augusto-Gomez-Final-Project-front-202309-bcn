import { createSlice } from "@reduxjs/toolkit";

export interface UiStructure {
  isLoading: boolean;
  hasBackground: boolean;
}

const initialUiState: UiStructure = { isLoading: false, hasBackground: false };

const uiSlice = createSlice({
  name: "UiState",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: UiStructure) => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoading: (currentState: UiStructure) => ({
      ...currentState,
      isLoading: false,
    }),

    showBackground: (currentState: UiStructure) => ({
      ...currentState,
      hasBackground: true,
    }),

    hideBackground: (currentState: UiStructure) => ({
      ...currentState,
      hasBackground: false,
    }),
  },
});

export const {
  actions: {
    showLoading: showLoadingActionCreator,
    hideLoading: hideLoadingActionCreator,
    showBackground: showBackgroundActionCreator,
    hideBackground: hideBackgroundActionCreator,
  },
  reducer: uiReducer,
} = uiSlice;
