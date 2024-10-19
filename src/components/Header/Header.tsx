import styles from './Header.module.css'
import Logo from '@img/logo.svg?react'
import Shop from '@img/shop.svg?react'

export function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <Logo />
                <div className={styles.header_list}>
                    <a className={styles.header_list_item}>Main Page</a>
                    <a className={styles.header_list_item}>Categories</a>
                    <a className={styles.header_list_item}>All products</a>
                    <a className={styles.header_list_item}>All sales</a>
                </div>
                <button className={styles.header_button}>
                    <Shop />
                    <span className={styles.button_counter}>
                        12
                    </span>
                </button>

            </div>
        </div>
    )
}