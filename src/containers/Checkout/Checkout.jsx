import React from "react";
import styles from "./Checkout.module.scss";

const Checkout = (props) => {
    const { cart } = props;

    const cartMap = () => cart.map(product => {
        return (
            <div key={product.ticketCounter}>
                <img src={product.itemImg} alt={product.itemName} />
                <p>{product.itemName}</p>
                <p>{product.itemPrice}</p>
            </div>
        );
    });

    return (
        <main className={styles.checkout}>
            <header>
                <h1>Checkout</h1>
            </header>
            <div className={styles.divider} />
            <section>
                <div className={styles.divider} />
                {cartMap()}
                <div className={styles.divider} />
            </section>
            <button className={styles.formButton}>Checkout</button>
        </main>
    );
};

export default Checkout;
