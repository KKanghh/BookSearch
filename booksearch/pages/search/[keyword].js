import { useRouter } from "next/router";
import { Fragment } from "react";
import BooksList from "../../components/Books/BooksList";
import SearchForm from "../../components/SearchForm";

function SearchPage(props) {
  const router = useRouter();
  return (
    <Fragment>
      <SearchForm value={props.keyword} />
      <BooksList />
    </Fragment>
  );
}

export function getStaticPaths() {
  const DUMMY_BOOKS = [
    {
      id: "b1",
      name: "백설공주 1",
      img: "https://image.yes24.com/goods/22709127/L",
    },
    {
      id: "b2",
      name: "백설공주 2",
      img: "https://image.yes24.com/goods/56446488/L",
    },
    {
      id: "b3",
      name: "백설공주 3",
      img: "https://image.yes24.com/goods/22709127/L",
    },
  ];
  return {
    fallback: "blocking",
    paths: DUMMY_BOOKS.map((book) => ({
      params: {
        keyword: book.name,
      },
    })),
  };
}

export function getStaticProps(context) {
  const keyword = context.params.keyword;
  return {
    props: {
      keyword,
    },
  };
}

export default SearchPage;
