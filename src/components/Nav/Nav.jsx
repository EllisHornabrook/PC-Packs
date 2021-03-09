import React from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Nav.module.scss";
import userCheck from "../../utils/userCheck";

const Nav = (props) => {
    const { user, cart } = props;

    return (
        <div className={styles.nav}>
            <Link to="/account" className={styles.link}>
                {userCheck(
                    user,
                    <FontAwesomeIcon icon={"user"} className={styles.icon} />,
                    <FontAwesomeIcon icon={["far", "user"]} className={styles.icon} />
                )}
            </Link>
            <Link to="/checkout" className={styles.link}>
                <FontAwesomeIcon icon={"shopping-cart"} className={styles.icon} />
            </Link>
            <div>
                <FontAwesomeIcon icon={"bars"} className={styles.icon} />
            </div>
        </div>
    );
};

export default Nav;
