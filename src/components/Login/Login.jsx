import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Login.module.scss";

const Login = (props) => {
    const { setFormState } = props;

    return (
        <main>
            <header>
                <h1>Sign In</h1>
            </header>
            <div className={styles.divider} />
            <form action="" onSubmit={() => {}}>
                <div className={styles.divider} />
                <div className={styles.formInputs}>
                    <p>Email</p>
                    <input type="text" name="email" placeholder="" onChange={() => {}} required />
                </div>
                <div className={styles.formInputs}>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="" onChange={() => {}} required />
                </div>
                <button type="submit" className={styles.button}>Sign in</button>
                <div className={styles.googleButton} onClick={() => {}}>
                    <FontAwesomeIcon icon={["fab", "google"]} className={styles.icon} />
                    <p>Sign in with Google</p>
                </div>
                <div className={styles.divider} />
                <p className={styles.formText}>
                    Are you new here?&nbsp;
                    <b onClick={() => setFormState("register")}>Register</b>
                </p>
                <div className={styles.divider} />
            </form>
        </main>
    );
};

export default Login;
