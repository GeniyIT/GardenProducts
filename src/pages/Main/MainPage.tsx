import { useDispatch, useSelector } from "react-redux";
import { Categories } from "./components/Categories/Categories";
import { MainBanner } from "./components/MainBanner/MainBanner";
import styles from "./MainPage.module.css";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { fetchCategories } from "../../store/categoriesSlice";

export function MainPage() {
  return (
    <div className={styles.main}>
      <MainBanner title="Amazing Discounts on Garden Products!" />
      <Categories />
    </div>
  );
}
