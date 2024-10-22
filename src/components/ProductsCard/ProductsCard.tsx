import { FC } from "react";
import styles from "./productsCard.module.css";
import { IProductsCard } from "../../store/categoriesSlice";
import { apiUrl } from "../../config/consts";
import { IProduct } from "../../store/productsSlice";

export const ProductsCard: FC<IProduct> = ({
  id,
  title,
  image,
  price,
  discont_price,
}) => {
  const percentage = discont_price
    ? Math.floor(((price - discont_price) / price) * 100)
    : null;

  return (
    <div className={styles.products_card}>
      <div className={styles.products_card_img_container}>
        <img
          className={styles.products_card_img}
          src={apiUrl + image}
          alt={title}
        />
      </div>
      <div className={styles.products_card_info}>
        <h1 className={styles.products_card_title}>{title}</h1>

        <div className={styles.products_card_price_container}>
          {discont_price ? (
            <>
              <p className={styles.products_card_discount_price}>
                ${discont_price}
              </p>
              <del className={styles.products_card_price}>${price}</del>
            </>
          ) : (
            <p className={styles.products_card_price}>${price}</p>
          )}
        </div>
      </div>

      {discont_price && (
        <div className={styles.products_card_discount_percentage}>
          -{percentage}%
        </div>
      )}
      <button className={styles.products_card_button_cart}>Add to cart</button>
    </div>
  );
};
