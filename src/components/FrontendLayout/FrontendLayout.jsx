import React, { useMemo, useState } from "react";
import "../../assets/frontend/css/bootstrap.min.css";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { UnAuthenticatedRoutesNames } from "../../utilities/util.constant";
import { useQuery } from "react-query";
import { CategoryServices } from "../../services/categories.services";
import { message, notification } from "antd";
import { AuthUtils } from "../../utilities/Auth.utils";
import { AuthServices } from "../../services/auth.services";

function FrontendLayout() {
  const navigate = useNavigate();
  const [searchInputValue, setSearchInputValue] = useState(null);
  const { data: categoriesData } = useQuery(
    "getCategories",
    CategoryServices.getCategories
  );

  const getCategoriesMemo = useMemo(() =>
    categoriesData?.data?.results,
    [categoriesData?.data?.results]);

  const showFiveCategoriesMemo = useMemo(() =>
    categoriesData?.data?.results?.splice(0, 5),
    [categoriesData?.data?.results]
  );
  const onSearchSubmitHandler = (event) => {
    event.preventDefault();
    if (!searchInputValue) {
      notification.warning({
        message: "Please fill out the field first",
        placement: "topRight"
      });
      return;
    }
    else {
      navigate(
        UnAuthenticatedRoutesNames.SEARCH_DETAIL.replace(
          ":searchDetail",
          searchInputValue
        )
      )
    }
  }

  return (
    <>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to={UnAuthenticatedRoutesNames.HOME}>
              Home
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              {showFiveCategoriesMemo?.map((singleCategory, index) => (
                <li key={index}>
                  <Link to={UnAuthenticatedRoutesNames.CATEGORY_DETAIL.replace(
                    ":id", singleCategory?.cat_id
                  )} >
                    {singleCategory?.cat_title}
                  </Link>
                </li>
              ))}
              {AuthServices.isUserLoggedIn() ? (
                <li><a onClick={(event) => {
                  event.preventDefault();
                  AuthUtils.removeToken();
                  window.location.reload(true);
                }}>
                  Logout
                </a>
                </li>
              ) : (
                <>
                  <li>
                    <Link className="navbar-brand" to={UnAuthenticatedRoutesNames.LOGIN}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-brand" to={UnAuthenticatedRoutesNames.REGISTER}>
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row outlet">
          <div className="col-md-8">
            <Outlet />
          </div>

          <div className="col-md-4">
            <div className="well">
              <form action="" onSubmit={onSearchSubmitHandler}>
                <h4>Post Search</h4>
                <div className="input-group">
                  <input type="text" className="form-control"
                    onChange={(event) => {
                      event.preventDefault();
                      setSearchInputValue(event.target.value)
                    }}
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>
            </div>

            <div className="well">
              <h4>Post Categories</h4>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="list-unstyled">
                    {getCategoriesMemo?.length > 0 && getCategoriesMemo?.map((singleCategory, index) => (
                      <li key={index}>
                        <Link to={UnAuthenticatedRoutesNames.CATEGORY_DETAIL.replace(
                          ":id",
                          singleCategory.cat_id
                        )} >
                          {index + 1} - {singleCategory.cat_title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright &copy; Your Website 2014</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
};

export default FrontendLayout;