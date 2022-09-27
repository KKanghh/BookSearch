import styles from "./Layout.module.css";
import MainNavigation from "../Layout/MainNavigation";
import { useContext, useEffect } from "react";
import authContext from "../store/auth-context";
import { useRouter } from "next/router";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
