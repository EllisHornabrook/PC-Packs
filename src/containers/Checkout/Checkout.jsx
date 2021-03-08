import React from "react";
import styles from "./Checkout.module.scss";

const Checkout = () => {
    return (
        <main className={styles.checkout}>
            <header>
                <h1>Checkout</h1>
            </header>
            <div className={styles.divider} />
            <section>
                <p>Product</p>
            </section>
            <button>Checkout</button>
        </main>
    );
};

export default Checkout;
