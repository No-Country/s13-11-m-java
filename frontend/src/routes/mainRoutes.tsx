import React from "react";

import MainLayout from "@/layouts/MainLayout";
import NotFoundPage from "@/pages/NotFoundPage";

const OnBoarding = React.lazy(() => import("@/pages/OnBoarding/OnBoarding"));

export const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <OnBoarding />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
