import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Network } from "../types";

interface NetworkControlsState {
  search: string | null;
  filter: string | null;
  sortKeys: (keyof Network)[];
  sortOrder: string[];
  mobileOpen: boolean;
}

const initialState: NetworkControlsState = {
  search: null,
  filter: "All",
  sortKeys: ["id"],
  sortOrder: ["asc"],
  mobileOpen: false,
};

const networkControlsSlice = createSlice({
  name: "networkControls",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string | null>) => {
      state.search = action.payload;
    },
    sort: (
      state,
      action: PayloadAction<{ keys: (keyof Network)[]; order: string[] }>
    ) => {
      state.sortKeys = action.payload.keys;
      state.sortOrder = action.payload.order;
    },
    filter: (state, action: PayloadAction<string | null>) => {
      state.filter = action.payload;
    },
    toggleMobile: (state) => {
      state.mobileOpen = !state.mobileOpen;
    },
  },
});

export const { search, sort } = networkControlsSlice.actions;
export default networkControlsSlice.reducer;
