import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import authContext from "../store/auth-context";

function MyPage() {
  const ctx = useContext(authContext);
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://43.201.67.7:8080/users/info", {
          headers: { "X-Auth-Token": ctx.token },
        });
        console.log(res.data);
        setDetail(res.data);
      } catch (err) {
        console.error(err);
        ctx.refresh();
      }
    };

    fetchData();
  }, [ctx.token, ctx]);

  return (
    <React.Fragment>
      <h1>내 정보</h1>
      <div>{detail.email}</div>
      <div>{detail.id}</div>
      <div>{detail.name}</div>
    </React.Fragment>
  );
}

export default MyPage;
