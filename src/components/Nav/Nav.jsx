import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Nav.module.scss";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link to="/" className={styles.link}>
                <FontAwesomeIcon icon={["far", "user"]} className={styles.icon} />
                <FontAwesomeIcon icon={"user"} className={styles.icon} />
            </Link>
            <Link to="/" className={styles.link}>
                <FontAwesomeIcon icon={"shopping-cart"} className={styles.icon} />
            </Link>
            <button>
                <FontAwesomeIcon icon={"bars"} className={styles.icon} />
            </button>
        </div>
    );
};

export default Nav;
