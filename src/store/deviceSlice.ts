import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IDefaultState {
  format: "mobile" | "tablet" | "desktop";
}

const initialState: IDefaultState = {format: "desktop"};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setDevice: (state, action: PayloadAction<number>) => {
      if (action.payload < 768) {
        state.format = "mobile";
        console.log("mobile")
      } else if (action.payload < 1400) {
        state.format = "tablet";
        console.log("tablet")
      } else {
        state.format = "desktop";
      }
    }
  },
});

export const { setDevice } = deviceSlice.actions;
export default deviceSlice.reducer;
