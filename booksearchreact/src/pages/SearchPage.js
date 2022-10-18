import { Fragment, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
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
  console.log(ctx.token);
  console.log(keyword, page);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://localhost:8080/search?keyword=${keyword}&page=${page}`,
          {
            headers: {
              "X-Auth-Token": ctx.token,
            },
          }
        );
        console.log(res.data);
      } catch (err) {
        console.log("Error!");
        console.error(err);
      }
    }
    console.log(1);
    fetchData();
    console.log(2);
  }, [keyword, page, ctx.token]);
  return (
    <Fragment>
      <SearchForm value={keyword} />
      <BooksList />
    </Fragment>
  );
}

export default SearchPage;
