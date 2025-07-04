import { Navigate, type RouteObject } from "react-router";
import { PaperPlane } from "../../pages/ui/PaperPlane.tsx";
import { PoolPage } from "../../pages/ui/PoolPage.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to={"paper-plane"} />,
      },
      {
        path: "paper-plane?",
        element: <PaperPlane />,
      },
      {
        path: "pool",
        element: <PoolPage />,
      },
    ],
  },
];
