import { FC } from 'react'
import styles from './CategoriesCard.module.css'

interface ICategoriesCardProps {
    title: string,
    ImgUrl: string
}

export const CategoriesCard: FC<ICategoriesCardProps> = ({ title, ImgUrl }) => {

    return (
        <div className={styles.categories_card}>
            <div className={styles.categories_card_img_container}>
                <img src={ImgUrl} alt="" />
            </div>
            <p className={styles.categories_card_title}>{title}</p>
        </div>
    )
}