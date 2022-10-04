import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import styles from "./AuthForm.module.css";
import LoginInput from "./LoginInput";
import SignupInput from "./SignupInput";
import axios from "axios";
import authContext from "../../store/auth-context";

function AuthForm({ text, onSubmit }) {
  const location = useLocation();
  const navigate = useNavigate();
  const ctx = useContext(authContext);
  const [info, setInfo] = useState({});
  const [error, setError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      let res;
      if (location.pathname === "/users/login") {
        res = await axios("/users/login", { ...info });
        ctx.onLogin(res.data.accessToken);
      } else {
        res = await axios("/users/signup", { ...info });
      }
      console.log(res.data);
      navigate("/");
    } catch (err) {
      setError(err);
      return;
    }
  };

  return (
    <form
      className={`${styles.form} ${
        location.pathname === "/users/login"
          ? styles.smallForm
          : styles.largeForm
      }`}
      onSubmit={submitHandler}
    >
      <h2>{text}</h2>
      <div className={styles.input}>
        {location.pathname === "/users/login" ? (
          <LoginInput setInfo={setInfo} />
        ) : (
          <SignupInput setInfo={setInfo} />
        )}
        <p className={styles.caution}>{error?.message}</p>
      </div>
      <div className={styles.actions}>
        <button>{text}</button>
      </div>
    </form>
  );
}

export default AuthForm;
