import { Navigate, replace, useNavigate, useParams } from "react-router-dom";
import { FilterProducts } from "../../components/FilterProducts/FilterProducts";
import { ProductsCard } from "../../components/ProductsCard/ProductsCard";
import styles from "./CategoryPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect } from "react";
import { setCurrentCategoryProducts } from "../../store/productsSlice";
import { routes } from "../../config/routes";

export function CategoryPage() {
  const navigate = useNavigate();
  const { idCategory } = useParams<{ idCategory: string }>();
  const { categories } = useSelector((state: RootState) => state.categories);

  const { currentCategoryProducts, products } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(Number(idCategory));
    dispatch(setCurrentCategoryProducts(Number(idCategory)));
  }, [dispatch]);

  console.log(products);
  console.log(currentCategoryProducts);
  console.log(categories[Number(idCategory) - 1]);

  if (!categories[Number(idCategory) - 1]) {
    // return <div>Not found</div>;
    return navigate(routes.notFound);
  }
  return (
    <div className={styles.category_page}>
      <h1 className={styles.category_page_title}>
        {categories[Number(idCategory) - 1].title}
      </h1>
      <FilterProducts isSales={false} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
        {currentCategoryProducts.map((product, idx) => (
          <ProductsCard {...product} key={"product-id-" + idx} />
        ))}
      </div>
    </div>
  );
}
