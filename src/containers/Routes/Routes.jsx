import React from "react";
import { Router } from "@reach/router";
import Home from "../Home";
import Account from "../Account";
import Checkout from "../Checkout";
import Terms from "../Terms";
import PrivacyPolicy from "../PrivacyPolicy";
import ContactUs from "../ContactUs";
import NotFound from "../NotFound";

const Routes = (props) => {
    const { user, cart, setCart } = props;

    return (
        <Router>
            <Home path="/" cart={cart} setCart={setCart} />
            <Account path="/account" user={user} />
            <Checkout path="/checkout" cart={cart} />
            <Terms path="/terms" />
            <PrivacyPolicy path="/policy" />
            <ContactUs path="/contact" />
            <NotFound default />
        </Router>
    );
};

export default Routes;