import SearchBar from "../components/SearchBar";
import style from "../styles/HomePage.module.css";
import { Fragment } from "react";

function HomePage() {
  return (
    <div className={style.home}>
      <h1>책</h1>
      <SearchBar />
    </div>
  );
}

export default HomePage;
