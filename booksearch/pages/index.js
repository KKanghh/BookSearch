import SearchForm from "../components/SearchForm";
import style from "../styles/HomePage.module.css";
import { Fragment } from "react";

function HomePage() {
  return (
    <div className={style.home}>
      <h1>책 검색 서비스</h1>
      <SearchForm />
    </div>
  );
}

export default HomePage;
