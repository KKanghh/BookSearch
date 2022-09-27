import React, { useState } from "react";

const authContext = React.createContext({
  isLoggedIn: false,
  onLogin: (id, password) => {},
  onLogout: () => {},
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (id, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <authContext.Provider
      value={{ isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {props.children}
    </authContext.Provider>
  );
}

export default authContext;
