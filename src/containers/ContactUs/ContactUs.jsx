import React from "react";
import styles from "./ContactUs.module.scss";

const ContactUs = () => {
    return (
        <main className={styles.contact}>
            <header>
                <h1>Contact Us</h1>
            </header>
            <div className={styles.divider} />
            <section>
                <p>Phone</p>
                <p>Email</p>
                <p>Location</p>
            </section>
        </main>
    );
};

export default ContactUs;
