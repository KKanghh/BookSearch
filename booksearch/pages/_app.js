import "../styles/globals.css";
import Layout from "../Layout/Layout";
import authContext, { AuthContextProvider } from "../store/auth-context";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;
