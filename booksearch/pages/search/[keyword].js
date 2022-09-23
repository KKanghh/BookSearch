import { useRouter } from "next/router";
import { Fragment } from "react";
import BooksList from "../../components/Books/BooksList";
import SearchForm from "../../components/SearchForm";

function SearchPage() {
  const router = useRouter();
  const keyword = router.query.keyword;
  console.log(keyword);
  return (
    <Fragment>
      <SearchForm value={keyword} />
      <BooksList />
    </Fragment>
  );
}

export default SearchPage;
