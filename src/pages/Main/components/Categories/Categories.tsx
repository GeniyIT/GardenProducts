import styles from './Categories.module.css'

export function Categories() {
    return (
        <div className={styles.categories}>
            <div className={styles.catrgories_title_container}>
                <h1 className={styles.categories_title}>Categories</h1>
                <div className={styles.categories_button_container}>
                    <div className={styles.categories_button_line}></div>
                    <button className={styles.categories_button}>All categories</button>
                </div>
            </div>
            <div className={styles.categories_card}>
                
            </div>
        </div>
    )
}