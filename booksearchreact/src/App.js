import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import PopularPage from "./pages/PopularPage";
import authContext from "./store/auth-context";
import SearchPage from "./pages/SearchPage";
import MyPage from "./pages/MyPage";
import DetailPage from "./pages/DetailPage";

function App() {
  const ctx = useContext(authContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/popular"
          element={!ctx.isLoggedIn ? <Navigate to="/" /> : <PopularPage />}
        />
        <Route
          path="/search/:keyword"
          element={!ctx.isLoggedIn ? <Navigate to="/" /> : <SearchPage />}
        />
        <Route
          path="/mypage"
          element={!ctx.isLoggedIn ? <Navigate to="/" /> : <MyPage />}
        />
        <Route
          path="/detail/:bookId"
          element={!ctx.isLoggedIn ? <Navigate to="/" /> : <DetailPage />}
        />
        <Route path="*" element={<h1>Page Not Found.</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
