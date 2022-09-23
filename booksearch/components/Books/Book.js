import styles from "./Book.module.css";
import Link from "next/link";

function Book(props) {
  return (
    <li className={styles.book}>
      <div className={styles.img}>
        <img src={props.img} />
      </div>
      <div className={styles.text}>
        <Link href={`/detail/${props.id}`}>{props.name}</Link>
      </div>
    </li>
  );
}

export default Book;
