import { useParams } from "react-router-dom";

function DetailPage() {
  const params = useParams();
  return <h1>{params.bookId}</h1>;
}

export default DetailPage;
