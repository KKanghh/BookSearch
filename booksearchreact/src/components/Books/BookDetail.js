import React from "react";
import styles from "./BookDetail.module.css";

function BookDetail({ book }) {
  return (
    <React.Fragment>
      <h1 className={styles.title}>
        <a href={book.link} target="_blank" rel="noreferrer">
          {book.title}
        </a>
      </h1>
      <img src={book.image} alt={book.name} />
      <table className={styles.detail}>
        <tbody>
          <tr>
            <td>저자</td>
            <td>{book.author}</td>
          </tr>
          <tr>
            <td>가격</td>
            <td>{book.discount}원</td>
          </tr>
          <tr>
            <td>설명</td>
            <td>{book.description}</td>
          </tr>
          <tr>
            <td>ISBN</td>
            <td>{book.isbn}</td>
          </tr>
          <tr>
            <td>출판일</td>
            <td>{book.pubdate}</td>
          </tr>
          <tr>
            <td>출판사</td>
            <td>{book.publisher}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default BookDetail;
