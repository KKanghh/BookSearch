import React from "react";
import Rank from "./Rank";
import { BookRank } from "../../types/BookRank";
import styles from "./Ranking.module.css";

interface RankingProps {
  ranks: BookRank[];
}

const Ranking: React.FC<RankingProps> = ({ ranks }) => {
  return (
    <table className={styles.table}>
      <tbody>
        {ranks.map((book: BookRank, index: number) => (
          <Rank key={index} book={book} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default Ranking;
