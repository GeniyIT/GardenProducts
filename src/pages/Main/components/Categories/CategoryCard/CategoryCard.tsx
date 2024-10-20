import { FC } from "react";
import styles from "./CategoryCard.module.css";

interface ICategoryCardProps {
  title: string;
  ImgUrl: string;
}

export const CategoryCard: FC<ICategoryCardProps> = ({ title, ImgUrl }) => {
  return (
    <div className={styles.category_card}>
      <div className={styles.category_card_img_container}>
        <img className={styles.category_card_img} src={ImgUrl} alt="" />
      </div>
      <p className={styles.category_card_title}>{title}</p>
    </div>
  );
};
