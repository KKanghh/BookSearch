import React, { Fragment, useRef } from "react";
import styles from "./LoginInput.module.css";

interface SignUpInputProps {
  setInfo: (info: object) => void;
}

const LoginInput: React.FC<SignUpInputProps> = ({ setInfo }) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const password1Ref = useRef<HTMLInputElement>(null);
  const password2Ref = useRef<HTMLInputElement>(null);

  const changeHandler = () => {
    setInfo({
      email: emailRef.current!.value,
      name: nameRef.current!.value,
      pwd1: password1Ref.current!.value,
      pwd2: password2Ref.current!.value,
    });
  };

  return (
    <Fragment>
      <div className={styles.control}>
        <label htmlFor="id">Email</label>
        <input type="text" id="name" ref={emailRef} onChange={changeHandler} />
      </div>
      <div className={styles.control}>
        <label htmlFor="id">이름</label>
        <input type="text" id="id" ref={nameRef} onChange={changeHandler} />
      </div>
      <div className={styles.control}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password1"
          ref={password1Ref}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="password">비밀번호 확인</label>
        <input
          type="password"
          id="password2"
          ref={password2Ref}
          onChange={changeHandler}
        />
      </div>
    </Fragment>
  );
};

export default LoginInput;
