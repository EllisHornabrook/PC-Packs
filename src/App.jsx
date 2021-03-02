import React, { useState } from "react";
import "./App.css";
import "./data/fa-library";
import Header from "./containers/Header";
import Routes from "./containers/Routes";
import Footer from "./containers/Footer";

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <>
            <Header user={user} />

            <Routes user={user} />

            <Footer />
        </>
    );
};

export default App;
