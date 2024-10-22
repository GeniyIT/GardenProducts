import styles from "./FilterProducts.module.css"

export function FilterProducts() {
    return (
        <div className={styles.filter_products}>
            <div className={styles.filter_products_item}>
                <h1 className={styles.filter_products_title}>Price</h1>
                <input className={styles.filter_products_price_input} placeholder="from" type="number" id="from"/>
                <input className={styles.filter_products_price_input} placeholder="to" type="number" id="to"/>
            </div>
            <div className={styles.filter_products_item}>
                <h1 className={styles.filter_products_title}>Discount items</h1>
                <label className={styles.filter_products_discount_label}>
                    <input className={styles.filter_products_discount_input} type="checkbox" id="discount"/>
                    <span className={styles.filtre_products_discount_checkmark}></span>
                </label>
            </div>
            <div className={styles.filter_products_item}>
                <h1 className={styles.filter_products_title}>Sorted</h1>
                <select className={styles.filter_products_sorted_select}>
                    <option value="default" id="default">by default</option>
                    <option value="pricelowwer" id="price">Price lowwer</option>
                    <option value="priceHigher" id="price">Price higher</option>
                </select>
            </div>
        </div>
    )
}