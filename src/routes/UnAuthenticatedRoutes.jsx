import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontendLayout from "../components/FrontendLayout/FrontendLayout";
import { UnAuthenticatedRoutesNames } from "../utilities/util.constant";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PostDetail from "../pages/PostDetail";
import CategoryDetail from "../pages/CategoryDetail";
import SearchDetail from "../pages/SearchDetail";
import Register from "../pages/Register";
function UnAuthenticatedRoutes() {
    return (
        <Routes>
            <Route element={<FrontendLayout />} >
                <Route path={UnAuthenticatedRoutesNames.HOME} element={<Home />} />
                <Route path={UnAuthenticatedRoutesNames.POST_DETAIL} element={<PostDetail />} />
                <Route path={UnAuthenticatedRoutesNames.CATEGORY_DETAIL} element={<CategoryDetail />} />
                <Route path={UnAuthenticatedRoutesNames.SEARCH_DETAIL} element={<SearchDetail />} />
                <Route path={UnAuthenticatedRoutesNames.LOGIN} element={<Login />} />
                <Route path={UnAuthenticatedRoutesNames.REGISTER} element={<Register />} />
            </Route>
        </Routes>
    )
}
export default UnAuthenticatedRoutes;