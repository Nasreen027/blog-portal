import { create } from "apisauce";
// console.log(import.meta.env.REACT_APP_API_URL,"REACT_APP_API_URLREACT_APP_API_URLREACT_APP_API_URL")

const REACT_APP_API_URL = "https://blog-api-testing.squadcodersdev.com/api"

const apiSauceInstance = create({
    // baseURL: import.meta.env.REACT_APP_API_URL,
    baseURL: REACT_APP_API_URL,
});

const get = (url, queryParams = {}) => {
    const response = apiSauceInstance.get(url, queryParams);
    return response;
};

const post = (url, data) => {
    const response = apiSauceInstance.post(url, data,{
        headers: {
          "Content-Type": "multipart/form-data",
          // Include any other headers your API might require
        },
    });
    return response;
};

const put = (url, data) => {
    const response = apiSauceInstance.put(url, data);
    return response;
};

const patch = (url, data) => {
    const response = apiSauceInstance.patch(url, data);
    return response;
};

const deleteRequest = (url, queryParams) => {
    const response = apiSauceInstance.delete(url, queryParams);
    return response;
};

export const ApiService = {
    get,
    post,
    put,
    patch,
    delete: deleteRequest
};