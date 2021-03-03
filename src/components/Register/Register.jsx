import React from "react";
import { Link } from "@reach/router";
import styles from "./Register.module.scss";

const Register = (props) => {
    const { setFormState } = props;

    return (
        <main>
            <header>
                <h1>Register</h1>
            </header>
            <div className={styles.divider} />
            <form action="" onSubmit={() => {}}>  
                <div className={styles.divider} />       
                <div className={styles.formInputs}>
                    <p>First Name</p>
                    <input type="text" placeholder="" required />
                </div>
                <div className={styles.formInputs}>
                    <p>Last Name</p>
                    <input type="text" placeholder="" required />
                </div>
                <div className={styles.formInputs}>
                    <p>Email</p>
                    <input type="text" name="email" placeholder="" required />
                </div>
                <div className={styles.formInputs}>
                    <p>Password</p>
                    <input type="text" name="password" placeholder="" required />
                </div>
                <button type="submit" className={styles.button}>Register</button>
                <p className={styles.formText}>
                    By signing up you agree to our&nbsp;
                    <Link to="/terms">Terms and Conditions</Link>
                </p>
                <div className={styles.divider} />
                <p className={styles.formText}>
                    Already have an account?&nbsp;
                    <b onClick={() => setFormState("login")}>Sign in</b>
                </p>
                <div className={styles.divider} />
            </form>
        </main>   
    );
};

export default Register;
