import { Provider, useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { fetchCategories } from "./store/categoriesSlice";
import { AppDispatch, RootState } from "./store";

export function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, categories, error } = useSelector(
    (state: RootState) => state.categories
  );
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(categories);
  return (
    <div>
      dfgdfg dfg dfg dfgdfgd
      <Outlet />
    </div>
  );
}
