import { FC } from "react";
import styles from "./productsCard.module.css";
import { IProductsCard } from "../../store/categoriesSlice";

export const ProductsCard: FC<IProductsCard> = ({
    id,
    title,
    image,
    price,
    discountPrice,
}) => {
    const percentage = discountPrice ? Math.floor(((price - discountPrice) / price) * 100) : null;

    return (
        <div className={styles.products_card}>
            <div className={styles.products_card_img_container}>
                <img className={styles.products_card_img} src={image} alt={title} />
            </div>
            <div className={styles.products_card_info}>
                <h1 className={styles.products_card_title}>{title}</h1>
                
                <div className={styles.products_card_price_container}>
                    {discountPrice ? (
                        <>
                            <p className={styles.products_card_discount_price}>${discountPrice}</p>
                            <del className={styles.products_card_price}>${price}</del>
                        </>
                    ) : (
                        <p className={styles.products_card_discount_price}>${price}</p>
                    )}
                </div>
            </div>

            {discountPrice && (
                <div className={styles.products_card_discount_percentage}>-{percentage}%</div>
            )}
            <button className={styles.products_card_button_cart}>Add to cart</button>
        </div>
    );
};
