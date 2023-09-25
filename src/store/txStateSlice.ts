import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IDefaultState {
  txState: "none" | "waiting" | "success" | "failed";
}

const initialState: IDefaultState = {txState: "success"};

export const txStateSlice = createSlice({
  name: 'txState',
  initialState,
  reducers: {
    setTxState: (state, action: PayloadAction<string>) => {
      if (action.payload === "waiting") {
        state.txState = "waiting";
      } else if (action.payload === "success") {
        state.txState = "success";
      } else if (action.payload === "failed") {
        state.txState = "failed";
      } else {
        state.txState = "none";
      }
    }
  },
});

export const { setTxState } = txStateSlice.actions;
export default txStateSlice.reducer;
