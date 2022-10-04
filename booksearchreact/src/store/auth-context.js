import React, { useState } from "react";

const authContext = React.createContext({
  token: "",
  isLoggedIn: false,
  onLogin: (info) => {},
  onLogout: () => {},
});

export function AuthContextProvider(props) {
  const [token, setToken] = useState(null);

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  return (
    <authContext.Provider
      value={{
        token,
        isLoggedIn: !!token,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
}

export default authContext;
