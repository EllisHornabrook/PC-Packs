import React from "react";
import { Link } from "@reach/router";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
    return (
        <Link to="/product" className={styles.card} >
            <img src="" alt="product" />
            <p>Product Name</p>
            <p>Product Price</p>
            <button>Enter the draw</button>
        </Link>
    );
};

export default ProductCard;
