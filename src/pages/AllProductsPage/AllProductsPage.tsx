import { useSelector } from "react-redux";
import { FilterProducts } from "../../components/FilterProducts/FilterProducts";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import styles from "./AllProductsPage.module.css";
import { RootState } from "../../store";

export function AllProductsPage() {
  const { products } = useSelector((state: RootState) => state.products);

  return (
    <div className={styles.all_products_page}>
      <h1 className={styles.all_products_page_title}>All products</h1>
      <FilterProducts isSales={false} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {products.map((product, idx) => (
          <ProductsCard {...product} key={"product-id-" + idx} />
        ))}
      </div>
    </div>
  );
}
