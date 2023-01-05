import { Fragment, useEffect, useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import BooksList from "../components/Books/BooksList";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import authContext from "../store/auth-context";
import Button from "../components/UI/Button";
import styles from "./SearchPage.module.css";
import { Book } from "../types/Book";
import useFetch from "../Hooks/useFetch";

const SearchPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");
  const page = queryParams.get("page");
  // const { token, refresh } = useContext(authContext);
  // const [books, setBooks] = useState<Book[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [total, setTotal] = useState<number>(0);

  const {
    data: { items: books, total },
    isLoading,
    fetchData,
  } = useFetch<{ items: Book[]; total: number }>({
    defaultValue: { items: [], total: 0 },
  });

  useEffect(() => {
    fetchData("/search", { params: { keyword, page } });
  }, [keyword, page, fetchData]);

  if (keyword == null || page == null) return <h1>Page Not Found</h1>;

  const pages = Array.from(
    { length: Math.floor((total - 1) / 10) },
    (v, i) => i + 1
  );
  const pageIndex = Math.floor((+page - 1) / 5);

  const movePrev = () => {
    navigate(`/search?keyword=${keyword}&page=${(pageIndex - 1) * 5 + 1}`);
  };

  const moveNext = () => {
    navigate(`/search?keyword=${keyword}&page=${(pageIndex + 1) * 5 + 1}`);
  };

  if (isLoading) return <h1>검색 중...</h1>;

  return (
    <Fragment>
      <SearchForm value={keyword} setCaution={(s: string): void => {}} />
      {books.length === 0 ? (
        <h1>관련된 책이 없습니다.</h1>
      ) : (
        <Fragment>
          <BooksList books={books} />
          <footer className={styles.footer}>
            {pageIndex + 1 !== 1 ? (
              <Button onClick={movePrev}>이전</Button>
            ) : (
              <div className={styles.empty} />
            )}
            <div className={styles.pageBar}>
              {pages.slice(pageIndex * 5, pageIndex * 5 + 5).map((num) => (
                <NavLink
                  key={num}
                  to={`/search?keyword=${keyword}&page=${num}`}
                >
                  {num}
                </NavLink>
              ))}
            </div>
            {pageIndex + 1 !== Math.floor((total - 1) / 50) + 1 ? (
              <Button onClick={moveNext}>다음</Button>
            ) : (
              <div className={styles.empty} />
            )}
          </footer>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SearchPage;
