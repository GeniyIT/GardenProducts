import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../App/App";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { MainPage } from "../../pages/Main/MainPage";
import { routes } from "../../config/routes";
import { CategoriesPage } from "../../pages/Categories/CategoriesPage";
import { AllProductsPage } from "../../pages/AllProductsPage/AllProductsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: routes.home, element: <MainPage /> },
      { path: routes.allCategories, element: <CategoriesPage /> },
      { path: routes.allProducts, element: <AllProductsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
