import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Nav.module.scss";

const Nav = () => {
    const userCheck = (user) => {
        if (!user) {
            return <FontAwesomeIcon icon={["far", "user"]} className={styles.icon} />
        } else {
            return <FontAwesomeIcon icon={"user"} className={styles.icon} />
        };
    } ;

    return (
        <div className={styles.nav}>
            <Link to="/" className={styles.link}>
                {userCheck()}
            </Link>
            <Link to="/" className={styles.link}>
                <FontAwesomeIcon icon={"shopping-cart"} className={styles.icon} />
            </Link>
            <div>
                <FontAwesomeIcon icon={"bars"} className={styles.icon} />
            </div>
        </div>
    );
};

export default Nav;
