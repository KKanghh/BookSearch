import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import authContext from "./store/auth-context";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";
import DetailPage from "./pages/DetailPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  const ctx = useContext(authContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/users/login"
          element={ctx.isLoggedIn ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/users/signup"
          element={ctx.isLoggedIn ? <Navigate to="/" /> : <SignUpPage />}
        />
        <Route
          path="/search"
          element={!ctx.isLoggedIn ? <Navigate to="/" /> : <SearchPage />}
        />
        <Route
          path="/mypage"
          element={!ctx.isLoggedIn ? <Navigate to="/" /> : <MyPage />}
        />
        <Route
          path="/detail/:isbn"
          element={!ctx.isLoggedIn ? <Navigate to="/" /> : <DetailPage />}
        />
        <Route
          path="/logout"
          element={!ctx.isLoggedIn ? <Navigate to="/" /> : <LogoutPage />}
        />
        <Route path="*" element={<h1>Page Not Found.</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
