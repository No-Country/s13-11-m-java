import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { Dialog } from "@/components/ui/dialog";

import { store } from "./app/store";
import ProductForm from "./product-form";

import "./index.css";

export type DialogProps = Pick<React.ComponentPropsWithoutRef<typeof Dialog>, "open" | "onOpenChange">;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={routes} /> */}
      <ProductForm />
    </Provider>
  </React.StrictMode>
);
