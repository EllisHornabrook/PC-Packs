import React, { useState } from "react";
import Profile from "../../components/Profile";
import Login from "../../components/Login";
import Register from "../../components/Register";
import userCheck from "../../utils/userCheck";

const Account = (props) => {
    const { user } = props;
    const [formState, setFormState] = useState("login")

    const changeForm = formState === "login" ? <Login setFormState={setFormState} /> : <Register setFormState={setFormState} />
    
    return (
        <>
            {userCheck(
                user,
                <Profile />,
                changeForm
            )}
        </>
    );
};

export default Account;
