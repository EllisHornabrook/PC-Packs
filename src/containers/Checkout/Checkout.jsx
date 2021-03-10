import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Checkout.module.scss";

const Checkout = (props) => {
    const { cart } = props;

    const displayCart = () => cart.map(product => {
        return (
            <div key={product.ticketCounter}>
                <img src={product.itemImg} alt={product.itemName} />
                <p>{product.itemName}</p>
                <p>{product.itemPrice}</p>
            </div>
        );
    });

    const cartCheck = () => {
        if (cart.length >= 1) {
            return (
                <>
                    <section>
                        <div className={styles.divider} />
                        {displayCart()}
                        <div className={styles.divider} />
                    </section>
                    <button className={styles.formButton}>Checkout</button>
                </>
            );
        } else {
            return (
                <>
                    <section>
                        <div className={styles.divider} />
                        <div className={styles.emptyCart}>
                            <p>Your cart is empty.</p>
                            <FontAwesomeIcon icon={"shopping-cart"} className={styles.icon} />
                            <p>Go and enter some awesome lotteries.</p>
                        </div>
                        <div className={styles.divider} />
                    </section>
                    <button className={styles.formButton}>View Lotteries</button>
                </>
            );
        };
    };

    return (
        <main className={styles.checkout}>
            <header>
                <h1>Checkout</h1>
            </header>
            <div className={styles.divider} />
            {cartCheck()}
        </main>
    );
};

export default Checkout;
