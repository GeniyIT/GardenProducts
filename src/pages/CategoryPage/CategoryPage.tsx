import { FilterProducts } from '../../components/FilterProducts/FilterProducts';
import { ProductsCard } from '../../components/ProductsCard/ProductsCard';
import styles from './CategoryPage.module.css'

export function CategoryPage() {
    return (
        <div className={styles.category_page}>
            <h1 className={styles.category_page_title}>Tools and equipment</h1>
            <FilterProducts isSales={false} />
            <ProductsCard />
        </div>
    );
}