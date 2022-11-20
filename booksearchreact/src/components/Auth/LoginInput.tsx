import React, { Fragment, useRef } from "react";
import styles from "./LoginInput.module.css";

interface LoginInputProps {
  setInfo: (info: object) => void;
}

const LoginInput: React.FC<LoginInputProps> = ({ setInfo }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const changeHandler = () => {
    setInfo({
      email: emailRef.current!.value,
      pwd: passwordRef!.current!.value,
    });
  };

  return (
    <Fragment>
      <div className={styles.control}>
        <label htmlFor="id">Email</label>
        <input type="text" id="id" ref={emailRef} onChange={changeHandler} />
      </div>
      <div className={styles.control}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          onChange={changeHandler}
        />
      </div>
    </Fragment>
  );
};

export default LoginInput;
