import { Fragment, useContext } from "react";
import AuthForm from "../components/auth/AuthForm";
import authContext from "../store/auth-context";

function LoginPage() {
  const ctx = useContext(authContext);

  return <AuthForm text="로그인" onSubmit={ctx.onLogin} />;
}

export default LoginPage;
