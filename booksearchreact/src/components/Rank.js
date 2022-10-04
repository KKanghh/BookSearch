import React from "react";
import { Link } from "react-router-dom";
import styles from "./Rank.module.css";

function Rank(props) {
  return (
    <tr>
      <td className={styles.rank}>{props.index}</td>
      <td className={styles.keyword}>
        <Link to={`/search?keyword=${props.keyword}`}>{props.keyword}</Link>
      </td>
    </tr>
  );
}

export default Rank;
