import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import authContext from "../store/auth-context";

const MyPage: React.FC = () => {
  const { token, refresh } = useContext(authContext);
  const [detail, setDetail] = useState<{
    email: string;
    id: string;
    name: string;
  }>({ email: "", id: "", name: "" });
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res = await axios.get("http://43.201.67.7:8080/users/info", {
          headers: { "X-Auth-Token": token },
        });
        console.log(res.data);
        setDetail(res.data);
      } catch (err) {
        console.error(err);
        refresh();
      }
    };

    fetchData();
  }, [token, refresh]);

  return (
    <React.Fragment>
      <h1>내 정보</h1>
      <div>{detail.email}</div>
      <div>{detail.id}</div>
      <div>{detail.name}</div>
    </React.Fragment>
  );
};

export default MyPage;
