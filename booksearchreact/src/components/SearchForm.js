import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";
import authContext from "../store/auth-context";
import Button from "./UI/Button";

function SearchForm(props) {
  const [enteredName, setEnteredName] = useState("");
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
    navigate(`/search/${enteredName}`);
  };

  useEffect(() => {
    if (props.value) setEnteredName(props.value);
  }, [props.value]);

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <input
          id="Bookname"
          name="name"
          type="text"
          value={enteredName}
          onChange={changeHandler}
        />
      </div>
      <div className={styles.control}>
        <Button type="submit">검색</Button>
      </div>
    </form>
  );
}

export default SearchForm;
