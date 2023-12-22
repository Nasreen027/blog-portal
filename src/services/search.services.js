import { ApiService } from "../utilities/Api.service";

const searchServicesUrls = {
    getSearchUrl : "/search",   
};
const searchPost = (data) => {
    const response = ApiService.post(searchServicesUrls.getSearchUrl, data);
    return response;
}
export const SearchService = {
    searchPost
}