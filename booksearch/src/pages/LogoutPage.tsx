import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import authContext from "../store/auth-context";

const LogoutPage: React.FC = () => {
  const navigate = useNavigate();
  const ctx = useContext(authContext);

  const logoutHandler = (): void => {
    ctx.onLogout();
    navigate("/");
  };

  return (
    <Fragment>
      <h1>로그아웃</h1>
      <Button onClick={logoutHandler}>로그아웃</Button>
    </Fragment>
  );
};

export default LogoutPage;
