import React from "react";
import Profile from "../../components/Profile";
import Login from "../../components/Login";
import Register from "../../components/Register";
import userCheck from "../../utils/userCheck";

const Account = (props) => {
    const { user } = props;
    
    return (
        <main>
            {userCheck(
                user,
                <Profile />,
                <>
                    <Login />
                    <Register />
                </>
            )}
        </main>
    );
};

export default Account;
