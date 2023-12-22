import { AuthUtilConstent } from "../utilities/util.constant";

const isUserLoggedIn = () => {
    const token = getToken();
    if (!token) {
        return false;
    }
    else {
        return true;
    }
}

const getToken = () => {
    const token = localStorage.getItem(AuthUtilConstent.USER_TOKEN);
    // console.log(token)
    return token;
}

export const AuthServices = {
    isUserLoggedIn,
    getToken
}