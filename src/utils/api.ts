import axios from "axios";
import { apiUrl } from "../config/consts";
import { backendRoutes } from "../config/routes";
import { ICategory } from "../store/categoriesSlice";

export async function getAllCategories() {
  const response = await axios<ICategory[]>(
    `${apiUrl}/${backendRoutes.categories}`
  );
  return response;
}