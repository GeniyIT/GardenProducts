import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../App/App";
import { NotFoundPage } from "../../pages/NotFound/NotFoundPage";
import { MainPage } from "../../pages/Main/MainPage";
import { routes } from "../../config/routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: routes.home, element: <MainPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
