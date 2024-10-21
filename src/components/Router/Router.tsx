import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../App/App";
import { NotFoundPage } from "../../pages/NotFound/NotFoundPage";
import { MainPage } from "../../pages/Main/MainPage";
import { routes } from "../../config/routes";
import { Categories } from "../../pages/Categories/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: routes.home, element: <MainPage /> },
      { path: routes.allCategories, element: <Categories /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
