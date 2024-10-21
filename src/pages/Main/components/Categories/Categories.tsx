import { useDispatch, useSelector } from "react-redux";
import styles from "./Categories.module.css";
import { AppDispatch, RootState } from "../../../../store";
import { fetchCategories } from "../../../../store/categoriesSlice";
import { useEffect } from "react";
import { CategoryCard } from "../../../../components/CategoryCard/CategoryCard";
import { apiUrl } from "../../../../config/consts";

export function Categories() {
  const { loading, categories } = useSelector(
    (state: RootState) => state.categories
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(categories);

  return (
    <div className={styles.categories}>
      <div className={styles.catrgories_title_container}>
        <h1 className={styles.categories_title}>Categories</h1>
        <div className={styles.categories_button_container}>
          <div className={styles.categories_button_line}></div>
          <button className={styles.categories_button}>All categories</button>
        </div>
      </div>
      <div className={styles.categories_card}>
        {categories.map((item, index) =>
          index <= 3 ? (
            <CategoryCard
              key={"card-" + index}
              ImgUrl={apiUrl + item.image}
              title={item.title}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
