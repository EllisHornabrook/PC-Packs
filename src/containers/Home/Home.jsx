import React from "react";
import styles from "./Home.module.scss";
import ProductList from "../../components/ProductList";

const Home = () => {
    return (
        <main className={styles.home}>
            <header>
                <h1>Welcome to the site</h1>
            </header>
            <ProductList />
            <section>
                <div className={styles.divider} />
                <p>How to play</p>
            </section>
            <section>
                <div className={styles.divider} />
                <p>More about the site</p>
            </section>
        </main>
    );
};

export default Home;