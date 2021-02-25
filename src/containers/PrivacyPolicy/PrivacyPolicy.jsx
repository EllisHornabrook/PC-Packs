import React from "react";
import styles from "./PrivacyPolicy.module.scss";

const PrivacyPolicy = () => {
    return (
        <main className={styles.policy}>
            <header>
                <h1>Privacy Policy</h1>
            </header>
            <div className={styles.divider} />
            <section>
                <p>sample text</p>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
