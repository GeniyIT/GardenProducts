import { Categories } from "./components/Categories/Categories";
import { MainBanner } from "./components/MainBanner/MainBanner";
import styles from "./MainPage.module.css";

export function MainPage() {

    return (
        <div className={styles.main}>
            <MainBanner title="Amazing Discounts on Garden Products!"/>
            <Categories />
        </div>
    )
}
