import { library } from "@fortawesome/fontawesome-svg-core";

import {
    faCcPaypal,
    faCcApplePay,
    faCcVisa,
    faCcMastercard,
    faCcAmex
} from "@fortawesome/free-brands-svg-icons";
// icon={["fab", "cc-brand"]}

import {
    faUser as farUser
} from "@fortawesome/free-regular-svg-icons";
// icon={["far", "user"]}

import {
    faUser,
    faCaretSquareUp,
    faToggleOn,
    faToggleOff,
    faShoppingCart,
    faBars,
    faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
// icon={"toggle-off"}

export default library.add(
    faCcPaypal,
    faCcApplePay,
    faCcVisa,
    faCcMastercard,
    faCcAmex,
    farUser,
    faUser,
    faCaretSquareUp,
    faToggleOn,
    faToggleOff,
    faShoppingCart,
    faBars,
    faLayerGroup
);