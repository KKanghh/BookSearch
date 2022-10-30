import React from "react";
import Rank from "./Rank";
import styles from "./Ranking.module.css";

function Ranking({ ranks }) {
  return (
    <table className={styles.table}>
      <tbody>
        {ranks.map((book, index) => (
          <Rank key={index} book={book} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}

export default Ranking;
