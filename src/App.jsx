import React from "react";
import styles from "./App.css";
import "./data/fa-library";
import Header from "./containers/Header";
import Routes from "./containers/Routes";
import Footer from "./containers/Footer";

const App = () => {
    return (
        <>
            <Header />

            <Routes />

            <Footer />
        </>
    );
};

export default App;
