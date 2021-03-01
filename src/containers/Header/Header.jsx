import React from "react";
import { Link } from "@reach/router";
import styles from "./Header.module.scss";
import Nav from "../../components/Nav";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>
                <Link to="/">
                    The Gaming Lottery
                </Link>
            </h1>
            <Nav />
        </header>
    );
};

export default Header;
