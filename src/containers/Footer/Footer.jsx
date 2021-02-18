import React from "react";
import { Link } from "@reach/router";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>© 2021 PC Packs Ltd.</p>
            <Link to="/terms" className={styles.link}>
                <p>Terms & Conditions</p>
            </Link>
            <Link to="/policy" className={styles.link}>
                <p>Privacy Policy</p>
            </Link>
            <Link to="/contact" className={styles.link}>
                <p>Contact Us</p>
            </Link>
        </footer>
    );
};

export default Footer;
