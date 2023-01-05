import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import styles from "./AuthForm.module.css";
import LoginInput from "./LoginInput";
import SignupInput from "./SignupInput";
import axios from "axios";
import authContext from "../../store/auth-context";

interface AuthFormProps {
  text: String;
}

const AuthForm: React.FC<AuthFormProps> = ({ text }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const ctx = useContext(authContext);
  const [info, setInfo] = useState<object>({});
  const [error, setError] = useState<string>("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(info);
    console.log(process.env.REACT_APP_API_URL);
    try {
      let res;
      if (location.pathname === "/users/login") {
        res = await axios.post(
          `${process.env.REACT_APP_API_URL}/users/login`,
          info
        );
        ctx.onLogin(res.data.accessToken, res.data.refreshToken);
        // ctx.onLogin("token");
      } else {
        res = await axios.post(
          `${process.env.REACT_APP_API_URL}/users/signup`,
          info
        );
      }
      console.log(res.data);
      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err && err.response) {
          if (err.response.status === 422) {
            setError("Email / Password가 잘못 입력되었습니다.");
          } else {
            setError("에러");
          }
        }
      }
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
        <p className={styles.caution}>{error}</p>
      </div>
      <div className={styles.actions}>
        <Button type="submit">{text}</Button>
      </div>
    </form>
  );
};

export default AuthForm;
