import { ApiService } from "../utilities/Api.service"

const UserServicesUrl = {
    login:"/login"
}

const login = (data) => {
    const response = ApiService.post(UserServicesUrl.login, data);
    return response;
}
export const UserServices = {
    login
}