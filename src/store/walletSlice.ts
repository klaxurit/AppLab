import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
  status: string;
  data: any;
}

const initialState: WalletState = {
  status: 'Init',
  data: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { setStatus, setData } = walletSlice.actions;

export default walletSlice.reducer;
