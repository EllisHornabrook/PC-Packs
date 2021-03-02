import React from "react";
import { Link } from "@reach/router";
import styles from "./Register.module.scss";

const Register = () => {
    return (
        <>
            <header>
                <h1>Register</h1>
            </header>
            <div className={styles.divider} />
            <section>
                <form action="" onSubmit={() => {}}>
                    <div className={styles.formInputs}>
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <div className={styles.formInputs}>
                        <input type="text" name="email" placeholder="Email" required />
                        <input type="text" name="password" placeholder="Password" required />
                    </div>
                    <p className={styles.termsLink}>By signing up you agree to our &nbsp;
                        <Link to="/terms">Terms and Conditions</Link>
                    </p>
                    <button type="submit" className={styles.button}>Register</button>
                </form>
            </section>
            <div className={styles.divider} />
            <section>
                <p>Already have an account? 
                    <button>Sign in</button>
                </p>
            </section>
        </>   
    );
};

export default Register;
