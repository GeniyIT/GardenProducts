import styles from './Header.module.css'
import Logo from '@img/logo.svg?react'
import Shop from '@img/shop.svg?react'
import { useNavigate } from 'react-router-dom';
import { routes } from '../../config/routes';

export function Header() {

    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <div className={styles.header_container}>
                <Logo />
                <div className={styles.header_list}>
                    <a onClick={() => navigate(routes.home)} className={styles.header_list_item}>Main Page</a>
                    <a onClick={() => navigate(routes.allCategories)} className={styles.header_list_item}>Categories</a>
                    <a onClick={() => navigate(routes.allProducts)} className={styles.header_list_item}>All products</a>
                    <a onClick={() => navigate(routes.allSales)} className={styles.header_list_item}>All sales</a>
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