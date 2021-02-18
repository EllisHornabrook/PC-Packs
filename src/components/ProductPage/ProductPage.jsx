import React from "react";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    return (
        <div className={styles.product}>
            <p>Product Name</p>
            <img src="" alt="product" />
            <p>Product Price</p>
            <p>Product Info</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductPage;
