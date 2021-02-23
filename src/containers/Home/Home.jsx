import React from "react";
import styles from "./Home.module.scss";
import ProductList from "../../components/ProductList";

const Home = () => {

    return (
        <main className={styles.main}>
            <div className={styles.mainContent}>
                <h2>Welcome to the site</h2>
            </div>
            <ProductList />
            <div className={styles.mainContent}>
                <p>How to play</p>
                <div />
                <p>More about the site</p>
            </div>
        </main>
    );
};

export default Home;