
const userAlreadyLoggedIn = () => {
    const user = localStorage.getItem("user");
    if (user) {
        const userObj = JSON.parse(user);
        redirectUser(userObj.roles);
    }
}

const userNotLoggedIn = () => {
    // const user = localStorage.getItem("user");
    // if (!user) {
    //     window.location.href = "/sign-in";
    // }
}

const getLoginedUser = () => {
    const user = localStorage.getItem("user");
    if (!user) {
        // window.location.href = "/sign-in";
    } else {
        return user;
    }
}

const redirectUser = (userRoles) => {
    if (userRoles.includes("ROLE_ADMIN"))
        window.location.href = "/admin/dashboard";
    else if (userRoles.includes("ROLE_RECRUITER"))
        window.location.href = "/recruiter/dashboard";
    else if (userRoles.includes("ROLE_TEACHER"))
        window.location.href = "/teacher/dashboard";
    else if (userRoles.includes("ROLE_STUDENT"))
        window.location.href = "/student/home";
    else
        window.location.href = "/sign-in";
}

const capatalizeString = (str) => {
    if (typeof str === "string") {
        const strArray = str.split(" ");
        let capatalizeStr = "";
        strArray.forEach((word, index) => {
            word = word.trim();
            if (word.length)
                capatalizeStr = capatalizeStr + (index === 0 ? "" : " ") + word[0].toUpperCase() + word.substring(1);
        })
        return capatalizeStr;
    }
    return str;
}

export { userAlreadyLoggedIn, redirectUser, userNotLoggedIn, capatalizeString, getLoginedUser };