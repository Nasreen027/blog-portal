import { AuthUtilConstent } from "./util.constant"

const saveToken = (token) => {
    if (!token) {
        return;
    }
    // console.log(token, 'token');
    localStorage.setItem(AuthUtilConstent.USER_TOKEN, token);
}

const removeToken = () => {
    localStorage.removeItem(AuthUtilConstent.USER_TOKEN)
}
export const AuthUtils = {
    saveToken,
    removeToken,
}