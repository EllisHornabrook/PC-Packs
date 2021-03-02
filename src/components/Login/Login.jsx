import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Login.module.scss";

const Login = () => {
    return (
        <>
            <header>
                <h1>Sign In</h1>
            </header>
            <div className={styles.divider} />
            <section>
                <form action="" onSubmit={() => {}}>
                    <div className={styles.formInputs}>
                        <input type="text" name="email" placeholder="Email" onChange={() => {}} required />
                        <input type="password" name="password" placeholder="Password" onChange={() => {}} required />
                    </div>
                    <button type="submit" className={styles.button}>Sign in</button>
                    <div className={styles.googleButton} onClick={() => {}}>
                        <FontAwesomeIcon icon={["fab", "google"]} className={styles.icon} />
                        <p>Sign in with Google</p>
                    </div>
                </form>
                
            </section>
            <div className={styles.divider} />
            <section>
                <p>New to the site? 
                    <button>Register</button>
                </p>
            </section>
        </>
    );
};

export default Login;
