import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import authContext from "../store/auth-context";
import styles from "./MyPage.module.css";

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
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/users/info`,
          {
            headers: { "X-Auth-Token": token },
          }
        );
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
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>이름</td>
            <td>{detail.name}</td>
          </tr>
          <tr>
            <td>이메일</td>
            <td>{detail.email}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default MyPage;
