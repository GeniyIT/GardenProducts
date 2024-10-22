import { FilterProducts } from "../../components/FilterProducts/FilterProducts";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import styles from "./AllProductsPage.module.css";

export function AllProductsPage() {
    return (
        <div className={styles.all_sales_page}>
            <h1 className={styles.all_sales_page_title}>Discounted items</h1>
            <FilterProducts isSales={true} />
            <ProductsCard />
        </div>
    );
}