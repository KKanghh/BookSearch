import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import authContext from "../store/auth-context";
import BookDetail from "../components/Books/BookDetail";
import axios from "axios";

function DetailPage() {
  const params = useParams();
  const isbn = params.isbn;
  const ctx = useContext(authContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://43.201.67.7:8080/search/book?isbn=${isbn}`,
          {
            headers: {
              "X-Auth-Token": ctx.token,
            },
          }
        );
        console.log(res.data);
        setBook(res.data.items[0]);
      } catch (err) {
        ctx.refresh();
      }
    }

    fetchData();
  }, [ctx.token, isbn]);

  console.log(isbn);

  if (!book) return <h1>데이터를 가져오는 중..</h1>;

  return <BookDetail book={book} />;
}

export default DetailPage;
