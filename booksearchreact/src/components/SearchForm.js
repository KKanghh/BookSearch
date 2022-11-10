import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";
import authContext from "../store/auth-context";
import Button from "./UI/Button";
import axios from "axios";

// const history = ["aa", "bb", "cc", "dd", "ee"];

function SearchForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [isFocused, setIsFoucsed] = useState(false);
  const navigate = useNavigate();
  const ctx = useContext(authContext);
  const [history, setHistory] = useState([]);

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
    navigate(`/search?keyword=${enteredName}&page=1`, { replace: true });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://43.201.67.7:8080/history", {
          headers: {
            "X-Auth-Token": ctx.token,
          },
        });
        // console.log(res.data.histories);
        setHistory(res.data.histories);
      } catch (err) {
        console.error(err);
        ctx.refresh();
      }
    };

    if (props.value) {
      setEnteredName(props.value);
    }
    if (ctx.isLoggedIn) {
      fetchData();
    }
  }, [props.value, ctx.token]);

  let historyContent = history.map((e, index) => {
    const day = new Date(e.searchTime);
    const year = day.getFullYear();
    const month = ("0" + (day.getMonth() + 1)).slice(-2);
    const date = ("0" + day.getDate()).slice(-2);
    const hour = ("0" + (day.getHours() + 9)).slice(-2);
    const minute = ("0" + day.getMinutes()).slice(-2);
    return (
      <Link to={`/search?keyword=${e.keyword}&page=1`} key={index}>
        <li>
          <span>{e.keyword}</span>
          <span className={styles.date}>
            {year}-{month}-{date} {hour}:{minute}
          </span>
        </li>
      </Link>
    );
  });

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
