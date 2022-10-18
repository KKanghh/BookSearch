import { Fragment, useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import BooksList from "../components/Books/BooksList";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import authContext from "../store/auth-context";

function SearchPage(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");
  const page = queryParams.get("page");
  const ctx = useContext(authContext);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:8080/search?keyword=${keyword}&page=${page}`,
          {
            headers: {
              "X-Auth-Token": ctx.token,
            },
          }
        );
        console.log(res.data);
        setBooks(res.data.items);
      } catch (err) {
        //await ctx.refresh();
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [keyword, page, ctx.token]);
  return (
    <Fragment>
      <SearchForm value={keyword} />
      <BooksList books={books} isLoading={isLoading} />
    </Fragment>
  );
}

export default SearchPage;
