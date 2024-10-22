import { FC } from "react";
import styles from "./CartCard.module.css";
import { TItemCart } from "../../../store/cartSlice";
import { apiUrl } from "../../../config/consts";

export const CartCard: FC<TItemCart> = ({
  discont_price,
  price,
  title,
  image,
}) => {
  return (
    <div className={styles.cart_card}>
      <img className={styles.cart_card_img} src={apiUrl + image} alt="" />
      <div className={styles.cart_card_info}>
        <div className={styles.cart_card_info_title}>
          <h1>{title}</h1>
          <img
            className={styles.cart_card_info_delete}
            src="/src/assets/img/delete.svg"
            alt=""
          />
        </div>
        <div className={styles.cart_card_info_price_container}>
          <div className={styles.cart_card_info_price}>
            <button>-</button>
            <p></p>
            <button>+</button>
          </div>
          <div className={styles.products_page_price_container}>
            {discont_price ? (
              <>
                <p className={styles.products_page_discount_price}>
                  ${discont_price}
                </p>
                <del className={styles.products_page_price}>${price}</del>
              </>
            ) : (
              <p className={styles.products_page_discount_price}>${price}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
