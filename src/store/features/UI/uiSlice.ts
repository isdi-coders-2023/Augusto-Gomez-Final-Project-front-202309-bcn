import { createSlice } from "@reduxjs/toolkit";

export interface uiStructure {
  isLoading: boolean;
}

const initialUiState: uiStructure = { isLoading: false };

const uiSlice = createSlice({
  name: "UiState",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: uiStructure) => ({
      ...currentState,
      isLoading: true,
    }),

    hideLoding: (currentState: uiStructure) => ({
      ...currentState,
      isLoading: false,
    }),
  },
});

export const {
  actions: {
    showLoading: showLoadingActionCreator,
    hideLoding: hideLoadingActionCreator,
  },
  reducer: uiReducer,
} = uiSlice;
