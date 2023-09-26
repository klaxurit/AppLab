import { configureStore } from "@reduxjs/toolkit";
import { networkApi } from "./store/networkSlice";
import networksControlsSlice from "./store/networksControlsSlice";
import selectedNetworkReducer from "./store/selectedNetworkSlice";
import helpReducer from "./store/helpSlice";
import deviceReducer from "./store/deviceSlice";
import formReducer from "./store/formSlice";
import txStateReducer from "./store/txStateSlice";
import walletReducer from './store/walletSlice'; 

export const store = configureStore({
  reducer: {
    [networkApi.reducerPath]: networkApi.reducer,
    networkControls: networksControlsSlice,
    selectedNetwork: selectedNetworkReducer,
    help: helpReducer,
    device: deviceReducer,
    form: formReducer,
    txState: txStateReducer,
    wallet: walletReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(networkApi.middleware),
});

export type RootState = {
  networkControls: ReturnType<typeof networksControlsSlice>;
  selectedNetwork: ReturnType<typeof selectedNetworkReducer>;
  help: ReturnType<typeof helpReducer>;
  device: ReturnType<typeof deviceReducer>;
  txState: ReturnType<typeof txStateReducer>;
  form: ReturnType<typeof formReducer>;
  wallet: ReturnType<typeof walletReducer>;
};
export type AppDispatch = typeof store.dispatch;
