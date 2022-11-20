import React from "react";
import { Book } from "../../types/Book";
import Books from "./Books";
import styles from "./BooksList.module.css";

interface BooksListProps {
  books: Book[];
}

const BooksList: React.FC<BooksListProps> = ({ books }) => {
  if (books?.length === 0) return <h1>NO BOOKS FOUND</h1>;
  return (
    <ul className={styles.booksList}>
      {books.map((book) => (
        <Books key={book.isbn} book={book} />
      ))}
    </ul>
  );
};

export default BooksList;
