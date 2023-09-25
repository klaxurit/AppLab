import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedNetworkState {
  selectedNetwork: any | null;
}

const initialState: SelectedNetworkState = {
  selectedNetwork: null,
};

export const selectedNetworkSlice = createSlice({
  name: "selectedNetwork",
  initialState,
  reducers: {
    setSelectedNetwork: (state, action: PayloadAction<any>) => {
      state.selectedNetwork = action.payload;
    },
  },
});

export const { setSelectedNetwork } = selectedNetworkSlice.actions;

export default selectedNetworkSlice.reducer;
