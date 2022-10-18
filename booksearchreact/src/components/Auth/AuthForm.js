import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Button from "../UI/Button";
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
    console.log(info);
    try {
      let res;
      if (location.pathname === "/users/login") {
        res = await axios.post("http://localhost:8080/users/login", {
          ...info,
        });
        ctx.onLogin(res.data.accessToken);
        // ctx.onLogin("token");
      } else {
        res = await axios.post("http://localhost:8080/users/signup", {
          ...info,
        });
      }
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response.status === 422)
        setError("Email / Password가 잘못 입력되었습니다.");
      else setError(err.message);
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
        <p className={styles.caution}>{error}</p>
      </div>
      <div className={styles.actions}>
        <Button type="submit">{text}</Button>
      </div>
    </form>
  );
}

export default AuthForm;
