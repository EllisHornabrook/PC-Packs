import React from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
    return (
        <main>
            <header>
                <h1>Profile</h1>
            </header>
            <div className={styles.divider} />
            <section>
                <p>Phone</p>
                <p>Email</p>
                <p>Location</p>
            </section>
        </main>
    );
};

export default Profile;
