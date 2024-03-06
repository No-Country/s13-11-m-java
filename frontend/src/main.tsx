import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";

import { store } from "./app/store";
import { AuthProvider } from "./context/authContext";
import { routes } from "./routes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={routes} />
        <Toaster />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
