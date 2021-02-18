import React from "react";
import { Link } from "@reach/router";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link to="/" className={styles.link}>
                <p>Login / Profile</p>
            </Link>
            <Link to="/" className={styles.link}>
                <p>Basket</p>
            </Link>
            <button>Dropdown Menu</button>
        </div>
    );
};

export default Nav;
