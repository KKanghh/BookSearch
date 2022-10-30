import SearchForm from "../components/SearchForm";
import style from "./HomePage.module.css";
import { useContext, useState, useEffect } from "react";
import authContext from "../store/auth-context";
import Ranking from "../components/Ranking/Ranking";
import axios from "axios";

function HomePage() {
  const [caution, setCaution] = useState("");
  const [ranks, setRanks] = useState([]);
  const ctx = useContext(authContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://43.201.67.7:8080/", {
          headers: {
            "X-Auth-Token": ctx.token,
          },
        });
        console.log(res.data);
        setRanks(res.data.ranks);
      } catch (err) {
        console.log("토큰 만료");
        ctx.refresh();
      }
    }
    if (ctx.isLoggedIn) {
      fetchData();
    }
  }, [ctx.token]);
  return (
    <div className={style.home}>
      <h1>책</h1>
      <SearchForm setCaution={setCaution} />
      {ctx.isLoggedIn && <Ranking ranks={ranks} />}
      <p className={style.caution}>{caution}</p>
    </div>
  );
}

export default HomePage;
