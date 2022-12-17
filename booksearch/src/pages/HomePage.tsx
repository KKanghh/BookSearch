import SearchForm from "../components/SearchForm";
import style from "./HomePage.module.css";
import { useContext, useState, useEffect } from "react";
import authContext from "../store/auth-context";
import Ranking from "../components/Ranking/Ranking";
import useFetch from "../Hooks/useFetch";

const HomePage: React.FC = () => {
  const [caution, setCaution] = useState<string>("");
  const { isLoggedIn } = useContext(authContext);
  const { data: ranks, fetchData } = useFetch<
    { keyword: string; count: number }[]
  >({
    defaultValue: [],
  });
  useEffect(() => {
    if (isLoggedIn) {
      fetchData("");
    }
  }, [fetchData, isLoggedIn]);
  return (
    <div className={style.home}>
      <h1>책</h1>
      <SearchForm setCaution={setCaution} value={""} />
      {isLoggedIn && <Ranking ranks={ranks} />}
      <p className={style.caution}>{caution}</p>
    </div>
  );
};

export default HomePage;
