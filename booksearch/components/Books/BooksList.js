import Book from "./Book";
import styles from "./BooksList.module.css";
const DUMMY_BOOKS = [
  {
    id: "b1",
    name: "백설공주 1",
    img: "https://image.yes24.com/goods/22709127/L",
  },
  {
    id: "b2",
    name: "백설공주 2",
    img: "https://image.yes24.com/goods/56446488/L",
  },
  {
    id: "b3",
    name: "백설공주 3",
    img: "https://image.yes24.com/goods/22709127/L",
  },
];

function BooksList() {
  return (
    <ul className={styles.booksList}>
      {DUMMY_BOOKS.map((book) => (
        <Book key={book.id} id={book.id} name={book.name} img={book.img} />
      ))}
    </ul>
  );
}

export default BooksList;
