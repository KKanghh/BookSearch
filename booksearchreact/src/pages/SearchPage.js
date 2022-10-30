import { Fragment, useEffect, useContext, useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import BooksList from "../components/Books/BooksList";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import authContext from "../store/auth-context";
import Button from "../components/UI/Button";
import styles from "./SearchPage.module.css";

function SearchPage(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");
  const page = queryParams.get("page");
  const ctx = useContext(authContext);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://43.201.67.7:8080/search?keyword=${keyword}&page=${page}`,
          {
            headers: {
              "X-Auth-Token": ctx.token,
            },
          }
        );
        setBooks(res.data.items);
        setTotal(res.data.total);
      } catch (err) {
        console.log("토큰 만료 확인");
        await ctx.refresh();
        // console.log(refresh);
        console.log(ctx.token);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [keyword, page, ctx.token]);

  const pages = Array.from(
    { length: parseInt((total - 1) / 10) },
    (v, i) => i + 1
  );
  const pageIndex = parseInt((page - 1) / 5);

  const movePrev = () => {
    navigate(`/search?keyword=${keyword}&page=${(pageIndex - 1) * 5 + 1}`);
  };

  const moveNext = () => {
    navigate(`/search?keyword=${keyword}&page=${(pageIndex + 1) * 5 + 1}`);
  };

  if (isLoading) return <h1>검색 중...</h1>;

  return (
    <Fragment>
      <SearchForm value={keyword} />
      {books.length === 0 ? (
        <h1>관련된 책이 없습니다.</h1>
      ) : (
        <BooksList books={books} isLoading={isLoading} />
      )}
      <footer className={styles.footer}>
        {pageIndex + 1 !== 1 ? (
          <Button onClick={movePrev}>이전</Button>
        ) : (
          <div className={styles.empty} />
        )}
        <div className={styles.pageBar}>
          {pages.slice(pageIndex * 5, pageIndex * 5 + 5).map((num) => (
            <NavLink key={num} to={`/search?keyword=${keyword}&page=${num}`}>
              {num}
            </NavLink>
          ))}
        </div>
        {pageIndex + 1 !== parseInt((total - 1) / 50) + 1 ? (
          <Button onClick={moveNext}>다음</Button>
        ) : (
          <div className={styles.empty} />
        )}
      </footer>
    </Fragment>
  );
}

export default SearchPage;
