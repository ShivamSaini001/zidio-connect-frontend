
const userAlreadyLoggedIn = () => {
    const user = localStorage.getItem("user");
    if (user) {
        const userObj = JSON.parse(user);
        redirectUser(userObj.roles);
    }
}

const userNotLoggedIn = () => {
    const user = localStorage.getItem("user");
    if (!user) {
        window.location.href = "/sign-in";
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

export { userAlreadyLoggedIn, redirectUser, userNotLoggedIn };