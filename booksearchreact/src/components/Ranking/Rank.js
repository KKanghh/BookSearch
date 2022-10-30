import React from "react";
import { Link } from "react-router-dom";
import styles from "./Rank.module.css";

function Rank(props) {
  return (
    <tr>
      <td className={styles.rank}>{props.index}</td>
      <td className={styles.keyword}>
        <Link to={`/search?keyword=${props.book.keyword}&page=1`}>
          {props.book.keyword}{" "}
          <span className={styles.count}>{props.book.count}회</span>
        </Link>
      </td>
    </tr>
  );
}

export default Rank;
