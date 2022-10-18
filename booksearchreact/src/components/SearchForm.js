import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";
import authContext from "../store/auth-context";
import Button from "./UI/Button";

const history = ["aa", "bb", "cc", "dd", "ee"];

function SearchForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [isFocused, setIsFoucsed] = useState(false);
  const navigate = useNavigate();
  const ctx = useContext(authContext);

  const changeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!ctx.isLoggedIn) {
      props.setCaution("로그인이 필요합니다!");
      return;
    }
    console.log(enteredName);
    navigate(`/search?keyword=${enteredName}&page=1`);
  };

  useEffect(() => {
    if (props.value) setEnteredName(props.value);
  }, [props.value]);

  let historyContent = history.map((e, index) => (
    <Link to={`/search?keyword=${e}&page=1`} key={index}>
      <li>{e}</li>
    </Link>
  ));

  const focusHandler = () => {
    setIsFoucsed(true);
  };

  const blurHandler = () => {
    setTimeout(() => {
      setIsFoucsed(false);
    }, 150);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <input
          id="Bookname"
          name="name"
          type="text"
          value={enteredName}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          autoComplete="off"
        />
        <ul className={styles.history}>{isFocused && historyContent}</ul>
      </div>
      <div className={styles.control}>
        <Button type="submit">검색</Button>
      </div>
    </form>
  );
}

export default SearchForm;
