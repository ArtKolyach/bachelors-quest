import { type RouteObject } from "react-router";
import { PaperPlane } from "../../pages/ui/subpages/PaperPlane.tsx";
import { PoolPage } from "../../pages/ui/subpages/PoolPage.tsx";
import { PineapplePage } from "../../pages/ui/subpages/PineapplePage.tsx";
import { StartPage } from "../../pages/ui/subpages/StartPage.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <StartPage />,
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
