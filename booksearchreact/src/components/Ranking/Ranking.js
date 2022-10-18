import React from "react";
import Rank from "./Rank";
import styles from "./Ranking.module.css";

const DUMMY_RANKS = [
  "역행자",
  "불편한 편의점2",
  "하얼빈",
  "데뷔 못하면 죽는 병 걸림",
  "아버지의 해방일지",
  "불편한 편의점",
  "파친코2",
  "파친코1",
  "설민석의 한국사 대모험 22",
  "원씽 THE ONE THING",
];

function Ranking() {
  return (
    <table className={styles.table}>
      <tbody>
        {DUMMY_RANKS.map((book, index) => (
          <Rank key={index} keyword={book} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
}

export default Ranking;
