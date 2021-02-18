import React from "react";
import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard";

const ProductList = () => {
    return (
        <div className={styles.products}>
            <ProductCard />
        </div>
    );
};

export default ProductList;
