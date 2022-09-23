import styles from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>책 검색 서비스</div>
      <nav>
        <ul>
          <li>
            <Link href="/">내 정보</Link>
          </li>
          <li>
            <Link href="/">인기 검색어</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
