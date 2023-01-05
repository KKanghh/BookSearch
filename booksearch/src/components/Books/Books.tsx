import styles from "./Book.module.css";
import { Link } from "react-router-dom";
import { Book } from "../../types/Book";

interface BooksProps {
  book: Book;
}

const Books: React.FC<BooksProps> = (props) => {
  return (
    <li className={styles.book}>
      <div className={styles.img}>
        <img src={props.book.image} alt={props.book.title} />
      </div>
      <div className={styles.text}>
        <Link to={`/detail/${props.book.isbn}`}>{props.book.title}</Link>
      </div>
    </li>
  );
};

export default Books;
