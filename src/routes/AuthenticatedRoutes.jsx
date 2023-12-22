import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../components/AdminLayout/AdminLayout";
import { AuthenticatedRoutesNames } from "../utilities/util.constant";
import AdminHome from "../pages/admin/AdminHome";
import AdminCategories from "../pages/admin/categories/AdminCategories";
import AddEditCategory from "../pages/admin/categories/AddEditCategory";
import AdminPosts from "../pages/admin/posts/AdminPosts";
import AddEditPost from "../pages/admin/posts/AddEditPost";

function AuthenticatedRoutes() {
    return (
        <Routes>
            <Route element={<AdminLayout />} >
                <Route path={AuthenticatedRoutesNames.HOME} element={<AdminHome />} />
                <Route path={AuthenticatedRoutesNames.CATEGORIES} element={<AdminCategories />} />
                <Route path={AuthenticatedRoutesNames.CATEGORY_ADD} element={<AddEditCategory />} />
                <Route path={AuthenticatedRoutesNames.POSTS} element={<AdminPosts />} />
                <Route path={AuthenticatedRoutesNames.POST_ADD} element={<AddEditPost />} />
            </Route>
        </Routes>
    )
}
export default AuthenticatedRoutes