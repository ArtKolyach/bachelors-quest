import { Navigate, type RouteObject } from "react-router";
import { PaperPlane } from "../../pages/ui/subpages/PaperPlane.tsx";
import { PoolPage } from "../../pages/ui/subpages/PoolPage.tsx";
import { PineapplePage } from "../../pages/ui/subpages/PineapplePage.tsx";

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
      {
        path: "pineapple",
        element: <PineapplePage />,
      },
    ],
  },
];
