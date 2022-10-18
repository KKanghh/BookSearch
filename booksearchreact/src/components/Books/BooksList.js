import React from "react";
import Book from "./Book";
import styles from "./BooksList.module.css";

function BooksList({ books }) {
  if (books?.length === 0) return <h1>NO BOOKS FOUND</h1>;
  return (
    <ul className={styles.booksList}>
      {books.map((book) => (
        <Book
          key={book.isbn}
          isbn={book.isbn}
          name={book.title}
          img={book.image}
        />
      ))}
    </ul>
  );
}

export default BooksList;
