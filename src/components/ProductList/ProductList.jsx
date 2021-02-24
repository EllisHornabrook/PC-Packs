import React from "react";
import styles from "./ProductList.module.scss";
import ProductCard from "../ProductCard";
import data from "../../data/dummyData";

const ProductList = () => {
    const itemMap = () => data.map(data => {
        return (
            <ProductCard key={data.id} data={data} />
        );
    });

    
    return (
        <section className={styles.products}>
            {itemMap()}
        </section>
    );
};

export default ProductList;
