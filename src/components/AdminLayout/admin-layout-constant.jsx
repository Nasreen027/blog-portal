import React from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  AuthUtilConstent,
  AuthenticatedRoutesNames,
  UnAuthenticatedRoutesNames,
} from "../../utilities/util.constant";

const logoutClickHandler = (event) => {
  event.preventDefault();
  localStorage.removeItem(AuthUtilConstent.USER_TOKEN);
  window.location.href = UnAuthenticatedRoutesNames.LOGIN;
};
export const sidebarItems = [
  {
    icon: <PieChartOutlined />,
    label: <Link to="/">Dashboard</Link>,
    key: "dashboard",
  },
  {
    icon: <PieChartOutlined />,
    label: <Link to={AuthenticatedRoutesNames.CATEGORIES}>Categories</Link>,
    key: "categories",
  },

  {
    icon: <DesktopOutlined />,
    label: <Link to={AuthenticatedRoutesNames.POSTS}>Posts</Link>,
    key: "posts",
  },

  {
    icon: <UserOutlined />,
    label: <Link to="/">Users</Link>,
    key: "users",
  },
  {
    icon: <FileOutlined />,
    label: <Link to="/">Comments</Link>,
    key: "comments",
  },
  {
    icon: <LogoutOutlined />,
    label: <div onClick={logoutClickHandler}>Logout</div>,
    key: "logout",
  },
];
