import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  return <h1>{router.query.bookId}</h1>;
}

export default DetailPage;
