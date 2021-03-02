const userCheck = (user, userContent, noUser) => {
    if (user) {
        return userContent;
    } else {
        return noUser;
    };
};

export default userCheck;