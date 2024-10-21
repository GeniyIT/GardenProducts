import styles from "./FilterProducts.module.css"

export function FilterProducts() {
    return (
        <div className={styles.filter_products}>
            <div className={styles.filter_products_price}> 
                <h1 className={styles.filter_products_price_title}>Price</h1>
            </div>
            <div className={styles.filter_products_discount}> 
                
            </div>
            <div className={styles.filter_products_sorted}> 
                
            </div>
        </div>
    )
}