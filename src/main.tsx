import "./polyfill.ts";
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { ChainProvider } from '@cosmos-kit/react';
import { Chain } from "@chain-registry/types";
import { Decimal } from "@cosmjs/math";
import { GasPrice } from "@cosmjs/stargate";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
import { assets, chains } from "chain-registry";



import App from "./App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Landing />,
    //   },
    // ]
  },

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChainProvider
    chains={[...chains]}
    assetLists={assets}
    wallets={[
      ...keplrWallets,
    ]}
    throwErrors={false}
    subscribeConnectEvents={false}
    defaultNameService={"stargaze"}
    walletConnectOptions={{
      signClient: {
        projectId: "a8510432ebb71e6948cfd6cde54b70f7",
        relayUrl: "wss://relay.walletconnect.org",
        metadata: {
          name: "CosmosKit Example",
          description: "CosmosKit test dapp",
          url: "https://test.cosmoskit.com/",
          icons: [
            "https://raw.githubusercontent.com/cosmology-tech/cosmos-kit/main/packages/docs/public/favicon-96x96.png",
          ],
        },
      },
    }}
    signerOptions={{
      signingStargate: (chain: Chain) => {
        switch (chain.chain_name) {
          case "osmosis":
            return {
              gasPrice: new GasPrice(Decimal.zero(1), "uosmo"),
            };
          default:
            return void 0;
        }
      },
    }}
    logLevel={"DEBUG"}
    endpointOptions={{
      isLazy: true,
      endpoints: {
        cosmoshub: {
          isLazy: false,
          rpc: [
            {
              isLazy: true,
              url: "https://rpc.cosmos.directory/cosmoshub",
              headers: {},
            },
          ],
        },
        terra2: {
          rpc: ["https://terra-rpc.lavenderfive.com/"],
          rest: ["https://phoenix-lcd.terra.dev/"],
        },
        terra2testnet: {
          rpc: ["https://terra-testnet-rpc.polkachu.com/"],
          rest: ["https://pisco-lcd.terra.dev/"],
        },
      },
    }}
  >
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>
  </ChainProvider>
);
