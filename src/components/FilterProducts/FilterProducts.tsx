import styles from "./FilterProducts.module.css"

export function FilterProducts() {
    return (
        <div className={styles.filter_products}>
            <div className={styles.filter_products_price}> 
                <h1 className={styles.filter_products_price_title}>Price</h1>
                <div className={styles.filter_products_price_container}>
                    <input className={styles.filter_products_price_input}/> 
            </div>
            <div className={styles.filter_products_discount}> 
                <h1 className={styles.filter_products_discount_title}>Discount items</h1>

            </div>
            <div className={styles.filter_products_sorted}> 
                <h1 className={styles.filter_products_sorted_title}>Sorted</h1>

            </div>
        </div>
    )
}