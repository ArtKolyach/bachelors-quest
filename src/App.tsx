import { Suspense } from "react";
import { useRoutes } from "react-router";
import { routes as ROUTES } from "./app/config/routes";
export const App = () => {
  const routes = useRoutes(ROUTES);

  return <Suspense>{routes}</Suspense>;
};
