import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';

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
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
