import React from "react";
import { Router } from "@reach/router";
import Home from "../Home";
import ProductPage from "../../components/ProductPage";
import Account from "../Account";
import Checkout from "../Checkout";
import Terms from "../Terms";
import PrivacyPolicy from "../PrivacyPolicy";
import ContactUs from "../ContactUs";
import NotFound from "../NotFound";

const Routes = (props) => {
    const { user } = props;

    return (
        <Router>
            <Home path="/" />
            <ProductPage path="/product" />
            <Account path="/account" user={user} />
            <Checkout path="/checkout" />
            <Terms path="/terms" />
            <PrivacyPolicy path="/policy" />
            <ContactUs path="/contact" />
            <NotFound default />
        </Router>
    );
};

export default Routes;