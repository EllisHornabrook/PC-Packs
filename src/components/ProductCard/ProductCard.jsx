import React from "react";
import { Link } from "@reach/router";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
    return (
        <div className={styles.cardContainer}>
            <Link to="/product" className={styles.card}>
                <img src="" alt="product" />
                <p>GeForce RTX 3080 Graphics Card | NVIDIA</p>
                <div className={styles.enter}>
                    <p>Enter the draw</p>
                    <b>£7.99</b>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
