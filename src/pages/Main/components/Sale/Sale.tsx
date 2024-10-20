import styles from "./Sale.module.css";

export function Sale() {
    return (
        <div className={styles.sale}>
            <div className={styles.sale_title_container}>
                <h1 className={styles.sale_title}>Sale</h1>
                <div className={styles.sale_button_container}>
                    <div className={styles.sale_button_line}></div>
                    <button className={styles.sale_button}>All sale</button>
                </div>
            </div>
            <div className={styles.sale_card}>

            </div>
        </div>
    )
}