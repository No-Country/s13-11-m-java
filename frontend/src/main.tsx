import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Button } from "./components/ui/button";
import { router } from "./routes/mainRoutes";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Button>Click me</Button>
    </Provider>
  </React.StrictMode>
);
