import { Fragment } from "react";
import { useParams, useLocation } from "react-router-dom";
import BooksList from "../components/Books/BooksList";
import SearchForm from "../components/SearchForm";

function SearchPage(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");
  console.log(keyword);
  return (
    <Fragment>
      <SearchForm value={keyword} />
      <BooksList />
    </Fragment>
  );
}

export default SearchPage;
