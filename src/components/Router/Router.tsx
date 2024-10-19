import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "../App/App";
import { NotFoundPage } from "../../pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "*", element: <NotFoundPage /> }],
  },
]);

export const Router = () => <RouterProvider router={router} />;
