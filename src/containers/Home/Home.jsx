import React from "react";
import styles from "./Home.module.scss";
import ProductList from "../../components/ProductList";

const Home = () => {

    return (
        <section className={styles.main}>
            <h2>Welcome to the site</h2>
            <p>More about the site</p>
            <ProductList />
            <p>How to play</p>
        </section>
    );
};

export default Home;