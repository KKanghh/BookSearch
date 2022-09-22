import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <form className={styles.form}>
      <div className={styles.control}>
        <input id="Bookname" name="name" type="text" />
      </div>
      <div className={styles.control}>
        <button type="submit">검색</button>
      </div>
    </form>
  );
}

export default SearchBar;
