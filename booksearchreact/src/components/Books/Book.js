import styles from "./Book.module.css";
import { Link } from "react-router-dom";

function Book(props) {
  return (
    <li className={styles.book}>
      <div className={styles.img}>
        <img src={props.img} alt={props.name} />
      </div>
      <div className={styles.text}>
        <Link to={`/detail/${props.isbn}`}>{props.name}</Link>
      </div>
    </li>
  );
}

export default Book;
