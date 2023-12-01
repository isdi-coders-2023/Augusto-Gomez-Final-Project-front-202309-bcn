import { createSlice } from "@reduxjs/toolkit";

export interface UiStructure {
  isLoading: boolean;
}

const initialUiState: UiStructure = { isLoading: false };

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
  },
});

export const {
  actions: {
    showLoading: showLoadingActionCreator,
    hideLoading: hideLoadingActionCreator,
  },
  reducer: uiReducer,
} = uiSlice;
