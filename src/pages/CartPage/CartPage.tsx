import { useForm } from "react-hook-form";
import styles from "./CartPage.module.css";

export function CartPage() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }

    return (
        <div className={styles.cart_page}>
            <div className={styles.cart_title_container}>
                <h1 className={styles.cart_title}>Shopping cart</h1>
                <div className={styles.cart_button_container}>
                    <div className={styles.cart_button_line}></div>
                    <button className={styles.cart_button}>Back to the store</button>
                </div>
            </div>
            <div className={styles.cart_content_container}>
                <div className={styles.cart_content}>
                    <div className={styles.cart_list}>

                    </div>
                    <div className={styles.cart_order_form_container}>
                        <div className={styles.cart_order_details}>
                            <h1 className={styles.cart_order_title}>Order details</h1>
                            <div className={styles.cart_order_total}>
                                <h1 className={styles.cart_order_total_title}>4 Items</h1>
                                <div className={styles.cart_order_total_price}>
                                    <h1 className={styles.cart_order_total_title}>Total</h1>
                                    <h1 className={styles.cart_order_total_price_value}>$541,00</h1>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cart_order_form}>
                            <form className={styles.cart_order_form_form} onSubmit={handleSubmit(onSubmit)}>
                                <input className={styles.cart_order_form_input} type="text" placeholder="Name" {...register("name")} />
                                <input className={styles.cart_order_form_input} type="text" placeholder="Phone number" {...register("phone")} />
                                <input className={styles.cart_order_form_input} type="email" placeholder="Email" {...register("email")} />
                                <button className={styles.cart_order_form_button}>Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}