import { useDispatch, useSelector } from "react-redux";
import { FilterProducts } from "../../components/FilterProducts/FilterProducts";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import styles from "./AllSalesPage.module.css";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { getSalesProducts } from "../../store/productsSlice";

export function AllSalesPage() {
  const { salesProducts } = useSelector((state: RootState) => state.products);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getSalesProducts());
  }, [dispatch]);

  if (salesProducts.length === 0) {
    return <></>;
  }

  return (
    <div className={styles.all_sales_page}>
      <h1 className={styles.all_sales_page_title}>Discounted items</h1>
      <FilterProducts isSales={true} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {salesProducts.map((product, idx) => (
          <ProductsCard {...product} key={"product-id-" + idx} />
        ))}
      </div>
    </div>
  );
}
