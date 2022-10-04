import { Fragment, useContext } from "react";
import AuthForm from "../components/Auth/AuthForm";
import authContext from "../store/auth-context";

function SignUpPage() {
  const ctx = useContext(authContext);
  return <AuthForm text="회원가입" onSubmit={ctx.onSignup} />;
}

export default SignUpPage;
