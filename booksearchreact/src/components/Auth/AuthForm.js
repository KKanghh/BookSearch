import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./AuthForm.module.css";

function AuthForm(props) {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdChange = (event) => {
    setId(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(id, password);
    console.log(id, password);
    navigate("/");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h2>{props.text}</h2>
      <div>
        <div className={styles.control}>
          <label htmlFor="id">ID</label>
          <input type="text" id="id" onChange={onIdChange} />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" onChange={onPasswordChange} />
        </div>
      </div>
      <div className={styles.actions}>
        <button>{props.text}</button>
      </div>
    </form>
  );
}

export default AuthForm;
