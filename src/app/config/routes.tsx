import { Navigate, type RouteObject } from "react-router";
import { PaperPlane } from "../../pages/ui/PaperPlane.tsx";
import { PoolPage } from "../../pages/ui/PoolPage.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to={"paper"} />,
      },
      {
        path: "paper",
        element: <PaperPlane />,
      },
      {
        path: "deeper",
        element: <PoolPage />,
      },
    ],
  },
];
