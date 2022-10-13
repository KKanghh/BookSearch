import React, { Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
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
      <Button onClick={logoutHandler}>로그아웃</Button>
    </Fragment>
  );
}

export default LogoutPage;
