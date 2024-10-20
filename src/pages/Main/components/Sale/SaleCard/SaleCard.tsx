import { FC } from "react";
import styles from "./Sale.module.css";

interface ISaleCardProps {
    title: string,
    imgUrl: string,
    price: number,
    discountPrice: number
}

export const SaleCard: FC<ISaleCardProps> = ({ title, imgUrl, price, discountPrice }) => {
    const percentage = Math.floor((price - discountPrice) / price * 100)
    return (
        <div className={styles.sale_card}>
            <div className={styles.sale_card_img_container}>
                <img className={styles.sale_card_img} src={imgUrl} alt="" />
            </div>
            <div className={styles.sale_card_info}>
                <h1 className={styles.sale_card_title}>{title}</h1>
                <div className={styles.sale_card_price_container}>
                    <p className={styles.sale_card_discount_price}>${discountPrice}</p>
                    <del className={styles.sale_card_price}>${price}</del>
                </div>
            </div>
            <div className={styles.sale_card_discount_percentage}>
                -{percentage}%
            </div>
        </div>
    )
}