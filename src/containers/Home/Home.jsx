import React from "react";
import styles from "./Home.module.scss";
import ProductList from "../../components/ProductList";

const Home = () => {

    return (
        <main className={styles.main}>
            <h2>Welcome to the site</h2>
            <ProductList />
            <p>How to play</p>
            <p>More about the site</p>
        </main>
    );
};

export default Home;