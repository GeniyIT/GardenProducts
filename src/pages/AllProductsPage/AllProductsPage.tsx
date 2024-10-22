import { FilterProducts } from "../../components/FilterProducts/FilterProducts";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import styles from "./AllProductsPage.module.css";

export function AllProductsPage() {
    return (
        <div className={styles.all_products_page}>
            <h1 className={styles.all_products_page_title}>All products</h1>
            <FilterProducts />
            <ProductsCard />
        </div>
    );
}