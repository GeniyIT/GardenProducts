import { useDispatch, useSelector } from "react-redux";
import styles from "./Sale.module.css";
import { AppDispatch, RootState } from "../../../../store";
import { useEffect } from "react";
import {
  getSalesProducts,
  setCurrentCategoryProducts,
  setCurrentProduct,
} from "../../../../store/productsSlice";
import { SaleCard } from "./SaleCard/SaleCard";
import { apiUrl } from "../../../../config/consts";

export function Sale() {
  const dispatch = useDispatch<AppDispatch>();
  const { salesProducts, currentCategoryProducts, currentProduct } =
    useSelector((state: RootState) => state.products);
  useEffect(() => {
    dispatch(getSalesProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentCategoryProducts(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentProduct(2));
  }, [dispatch]);

  if (!salesProducts) {
    return <span>Not found</span>;
  }
  console.log("[CURRENT CATEGORY PRODUCTS]: ", currentCategoryProducts);
  console.log("[CURRENT PRODUCT]: ", currentProduct);
  console.log(salesProducts);
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
        {salesProducts.map((saleProduct, idx) =>
          idx <= 3 ? (
            <SaleCard
              key={`sale-card-${idx}`}
              imgUrl={apiUrl + saleProduct.image}
              title={saleProduct.title}
              price={saleProduct.price}
              discountPrice={saleProduct.discont_price as number}
            />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
