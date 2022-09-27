import SearchForm from "../components/SearchForm";
import style from "./HomePage.module.css";
import { useState } from "react";

function HomePage() {
  const [caution, setCaution] = useState("");
  return (
    <div className={style.home}>
      <h1>책</h1>
      <SearchForm setCaution={setCaution} />
      <p className={style.caution}>{caution}</p>
    </div>
  );
}

export default HomePage;
