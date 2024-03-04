import { createBrowserRouter } from "react-router-dom";

import { authRoutes } from "./authRoutes";
import { mainRoutes } from "./mainRoutes";
import { userRoutes } from "./userRoutes";

export const routes = createBrowserRouter([...mainRoutes, authRoutes, userRoutes]);
