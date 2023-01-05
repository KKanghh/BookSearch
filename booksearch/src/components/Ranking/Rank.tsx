import React from "react";
import { Link } from "react-router-dom";
import styles from "./Rank.module.css";
import { BookRank } from "../../types/BookRank";

interface RankProps {
  book: BookRank;
  index: number;
}

const Rank: React.FC<RankProps> = (props) => {
  const count = `${props.book.count}회`;
  return (
    <tr>
      <td className={styles.rank}>{props.index}</td>
      <td className={styles.keyword}>
        <Link to={`/search?keyword=${props.book.keyword}&page=1`}>
          <span>{props.book.keyword} </span>
          <span className={styles.count}>{count}</span>
        </Link>
      </td>
    </tr>
  );
};

export default Rank;
