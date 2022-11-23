import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import authContext from "../store/auth-context";
import BookDetail from "../components/Books/BookDetail";
import axios from "axios";
import { Book } from "../types/Book";

const DetailPage: React.FC = () => {
  const params = useParams();
  const isbn = params.isbn;
  const { token, refresh } = useContext(authContext);
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/search/book?isbn=${isbn}`,
          {
            headers: {
              "X-Auth-Token": token,
            },
          }
        );
        setBook(res.data.items[0]);
      } catch (err) {
        refresh();
      }
    }

    fetchData();
  }, [token, isbn, refresh]);

  console.log(isbn);

  if (!book) return <h1>데이터를 가져오는 중..</h1>;

  return <BookDetail book={book} />;
};

export default DetailPage;
