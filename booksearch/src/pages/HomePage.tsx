import SearchForm from "../components/SearchForm";
import style from "./HomePage.module.css";
import { useContext, useState, useEffect } from "react";
import authContext from "../store/auth-context";
import Ranking from "../components/Ranking/Ranking";
import axios from "axios";

const HomePage: React.FC = () => {
  const [caution, setCaution] = useState<string>("");
  const [ranks, setRanks] = useState<{ keyword: string; count: number }[]>([]);
  const { token, refresh, isLoggedIn } = useContext(authContext);
  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}`, {
          headers: {
            "X-Auth-Token": token,
          },
        });
        console.log(res.data);
        setRanks(res.data.ranks);
      } catch (err) {
        console.log("토큰 만료");
        refresh();
      }
    }
    if (isLoggedIn) {
      fetchData();
    }
  }, [token, refresh, isLoggedIn]);
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
