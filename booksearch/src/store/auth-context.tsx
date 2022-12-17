import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const authContext = React.createContext({
  token: "",
  isLoggedIn: false,
  onLogin: (token: string, refreshToken: string): void => {},
  onLogout: () => {},
  refresh: () => {},
});

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = (
  props
) => {
  const [token, setToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");
  const navigate = useNavigate();

  const loginHandler = (token: string, rToken: string): void => {
    setToken(token);
    setRefreshToken(rToken);
    localStorage.setItem("accessToken", token);
    localStorage.setItem("refreshToken", rToken);
  };

  const logoutHandler = (): void => {
    setToken("");
    setRefreshToken("");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken")!);
      setRefreshToken(localStorage.getItem("refreshToken")!);
    }
  }, []);

  const refresh = useCallback(async (): Promise<void> => {
    try {
      console.log(process.env.REACT_APP_API_URL);
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/token`,
        {
          accessToken: token,
          refreshToken,
        }
      );
      console.log(res.data);
      setToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.accessToken);
    } catch (err) {
      logoutHandler();
      navigate("/", { replace: true });
    }
  }, [navigate, refreshToken, token]);

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
};

export default authContext;
