import React from "react";
import styles from "./Header.module.scss";
import Nav from "../../components/Nav";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>PC Packs</h1>
            <Nav />
        </header>
    );
};

export default Header;
