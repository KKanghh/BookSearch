import React from "react";
import styles from "./BookDetail.module.css";

function BookDetail({ book }) {
  return (
    <React.Fragment>
      <h1 className={styles.title}>{book.name}</h1>
      <img src={book.img} alt={book.name} />
      <table className={styles.detail}>
        <tbody>
          <tr>
            <td>가격</td>
            <td>{book.price}</td>
          </tr>
          <tr>
            <td>설명</td>
            <td>{book.description}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default BookDetail;
