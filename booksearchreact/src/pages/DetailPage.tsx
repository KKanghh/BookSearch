import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import authContext from "../store/auth-context";
import BookDetail from "../components/Books/BookDetail";
import axios from "axios";
import { Book } from "../types/Book";

function DetailPage() {
  const params = useParams();
  const isbn = params.isbn;
  const { token, refresh } = useContext(authContext);
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const res = await axios.get(
          `http://43.201.67.7:8080/search/book?isbn=${isbn}`,
          {
            headers: {
              "X-Auth-Token": token,
            },
          }
        );
        console.log(res.data);
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
}

export default DetailPage;
