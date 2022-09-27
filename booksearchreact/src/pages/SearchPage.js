import { Fragment } from "react";
import { useParams } from "react-router-dom";
import BooksList from "../components/Books/BooksList";
import SearchForm from "../components/SearchForm";

function SearchPage(props) {
  const params = useParams();
  const keyword = params.keyword;
  return (
    <Fragment>
      <SearchForm value={keyword} />
      <BooksList />
    </Fragment>
  );
}

export default SearchPage;
