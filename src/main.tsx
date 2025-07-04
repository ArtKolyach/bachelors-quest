import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router";
import { ConfigProvider } from "antd";
import { antdTheme } from "./app/ui/antdTheme";

const router = createHashRouter([
  {
    path: "/*",
    Component: App,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={antdTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
);
