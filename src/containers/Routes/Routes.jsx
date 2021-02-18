import React from "react";
import { Router } from "@reach/router";
// import styles from "./Routes.module.scss";
import Home from "../Home";
import NotFound from "../NotFound";

const Routes = () => {

    return (
        <Router>
            <Home path="/" />
            <NotFound default />
        </Router>
    );
};

export default Routes;