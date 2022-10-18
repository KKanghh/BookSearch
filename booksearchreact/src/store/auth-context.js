import React, { useEffect, useState } from "react";
import axios from "axios";
const authContext = React.createContext({
  token: "",
  isLoggedIn: false,
  onLogin: (token, refreshToken) => {},
  onLogout: () => {},
});

export function AuthContextProvider(props) {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const loginHandler = (token, rToken) => {
    setToken(token);
    setRefreshToken(rToken);
    localStorage.setItem("accessToken", token);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const logoutHandler = () => {
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
      setRefreshToken(localStorage.getItem("refreshToken"));
    }
  }, []);

  const refresh = async () => {
    console.log(token, refreshToken);
    const res = await axios.post("https://localhost:8080/users/token", {
      accessToken: token,
      refreshToken,
    });
    console.log(res.data);
  };

  return (
    <authContext.Provider
      value={{
        token,
        isLoggedIn: !!token,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        refresh,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
}

export default authContext;
