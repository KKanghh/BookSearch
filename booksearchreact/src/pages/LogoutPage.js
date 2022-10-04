import React, { Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../store/auth-context";

function LogoutPage() {
  const navigate = useNavigate();
  const ctx = useContext(authContext);

  const logoutHandler = () => {
    ctx.onLogout();
    navigate("/");
  };
  //   ctx.onLogout();
  //   useEffect(() => {
  //     if (ctx.isLoggedIn) {
  //       ctx.onLogout();
  //     }
  //     navigate("/");
  //   }, [ctx, navigate]);

  return (
    <Fragment>
      <h1>로그아웃</h1>
      <button onClick={logoutHandler}>로그아웃</button>
    </Fragment>
  );
}

export default LogoutPage;
