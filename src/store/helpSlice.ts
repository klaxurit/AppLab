import { createSlice } from "@reduxjs/toolkit";

export const helpSlice = createSlice({
  name: 'help',
  initialState: {
    isHelpOpen: false,
    isSidebarOpen: false,
  },
  reducers: {
    openHelp: state => {
      state.isHelpOpen = true;
    },
    closeHelp: state => {
      state.isHelpOpen = false;
    },
    openSidebar: state => {
      state.isSidebarOpen = true;
    },
    closeSidebar: state => {
      state.isSidebarOpen = false;
    },
  },
});

export const { openHelp, closeHelp, openSidebar, closeSidebar } = helpSlice.actions;
export default helpSlice.reducer;
