import axios from "../Api";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [user, setUser] = useState([]);

  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.get("auth/loggedIn");
      setLoggedIn(loggedInRes.data.auth);
      setUser(loggedInRes.data.user);
    } catch (err) {
      console.error("Error checking login status:", err);
      setLoggedIn(false);
    }
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, user, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
