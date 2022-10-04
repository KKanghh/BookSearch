import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./AuthForm.module.css";
import LoginInput from "./LoginInput";
import SignupInput from "./SignupInput";
import axios from "axios";

function AuthForm({ text, onSubmit }) {
  const location = useLocation();
  const [info, setInfo] = useState({});
  const [error, setError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      if (location.pathname === "/users/login") {
        const res = await axios("/users/login", { ...info });
        console.log(res.data);
      } else {
        const res = await axios("/users/signup", { ...info });
        console.log(res.data);
      }
    } catch (err) {
      setError(err);
    }
    console.log(info);
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
