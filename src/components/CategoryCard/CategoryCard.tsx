import { FC } from "react";
import styles from "./CategoryCard.module.css";
import { ICategory } from "../../store/categoriesSlice";

export const CategoryCard: FC<ICategory> = ({ title, image }) => {
  return (
    <div className={styles.category_card}>
      <div className={styles.category_card_img_container}>
        <img className={styles.category_card_img} src={image} alt="" />
      </div>
      <p className={styles.category_card_title}>{title}</p>
    </div>
  );
};
