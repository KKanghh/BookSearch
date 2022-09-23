import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./SearchForm.module.css";

function SearchForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const router = useRouter();

  const changeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);
    router.push(`/search/${enteredName}`);
  };

  useEffect(() => {
    if (props.value) setEnteredName(props.value);
  }, []);

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
        <button type="submit">검색</button>
      </div>
    </form>
  );
}

export default SearchForm;
