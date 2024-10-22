import styles from "./CartPage.module.css";

export function CartCard() {
    return (
        <div className={styles.cart_card}>
            <img className={styles.cart_card_img} src="/img/CartCardImg.png" alt="" />
            <div className={styles.cart_card_info}>
                <div className={styles.cart_card_info_title}>
                    <h1>Product name</h1>
                    <img className={styles.cart_card_info_delete} src="/img/delete.svg" alt="" />
                </div>
                <div className={styles.cart_card_info_price_container}>
                    <button className={styles.cart_card_info_button}>$100</button>
                    <div className={styles.products_page_price_container}>
                        {discountPrice ? (
                            <>
                                <p className={styles.products_page_discount_price}>${discountPrice}</p>
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
}