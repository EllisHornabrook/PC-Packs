import React, { useState } from "react";
import "./App.css";
import "./data/fa-library";
import Header from "./containers/Header";
import Routes from "./containers/Routes";
import Footer from "./containers/Footer";

const App = () => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    return (
        <>
            <Header user={user} cart={cart} />

            <Routes user={user} cart={cart} setCart={setCart} />

            <Footer />
        </>
    );
};

export default App;
