import styles from "./ProductsPage.module.css"

export function ProductsPage() {

    const percentage = discountPrice ? Math.floor(((price - discountPrice) / price) * 100) : null;

    return (
        <div className={styles.products_page}>
            <div className={styles.products_page_wrapper}>
                <img className={styles.products_page_img} src={image} alt="" />
                <div className={styles.products_page_info_container}>
                    <h1 className={styles.products_page_title}>{title}</h1>
                    <div className={styles.products_page_price_wrapper}>
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
                        {discountPrice && (
                            <div className={styles.products_page_discount_percentage}>-{percentage}%</div>
                        )}
                    </div>

                    <button className={styles.products_page_button}>Add to cart</button>
                    <div className={styles.products_page_description_container}>
                        <h1 className={styles.products_page_description_title}>Description</h1>
                        <p className={styles.products_page_description}>{description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}