import { useParams } from "react-router-dom";
import BookDetail from "../components/Books/BookDetail";

const DUMMY_BOOKS = [
  {
    id: "b1",
    name: "백설공주 1",
    img: "https://image.yes24.com/goods/22709127/L",
    price: 6000,
    description:
      "백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기백설공주 이야기v",
  },
  {
    id: "b2",
    name: "백설공주 2",
    img: "https://image.yes24.com/goods/56446488/L",
    price: 6000,
    description: "백설공주 이야기백설공주",
  },
  {
    id: "b3",
    name: "백설공주 3",
    img: "https://image.yes24.com/goods/22709127/L",
  },
];

function DetailPage() {
  const params = useParams();
  const bookId = params.bookId;

  const book = DUMMY_BOOKS.find((book) => book.id === bookId);
  return <BookDetail book={book} />;
}

export default DetailPage;
