import React from "react";
import styles from "./NotFound.module.scss";

const NotFound = () => {
    return (
        <main className={styles.notFound}>
            <header>
                <h1>PAGE NOT FOUND</h1>
            </header>
            <section>
                <p>sample text</p>
            </section>
        </main>
    );
};

export default NotFound;