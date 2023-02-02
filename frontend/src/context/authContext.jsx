import { createContext, useContext, useEffect, useState } from "react";
import request from "../../axios";
import { NotifyError, NotifySuccess } from "../components/Notify";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return () => validateToken();
  }, []);

  const validateToken = async () => {
    const _token = localStorage.getItem("token");
    if (_token && _token != "") {
      const req = await request
        .post("/auth/validate", {
          token: _token,
        })
        .then((res) => setUser(res.data))
        .then(() => {
          setLoading(false);
          NotifySuccess("Token validated.");
        })
        .catch((err) => {
          setLoading(false);
          NotifyError("Token expired. Please sign in again.");
          localStorage.removeItem("token");
        });
    } else {
      setLoading(false);
    }
  };

  const signup = async (email, password, role) => {
    await request
      .post("/auth/register", {
        email: email,
        password: password,
        role: role,
      })
      .then((res) => {
        NotifySuccess(`Welcome to healthX. Please login again.`);
      })
      .catch((err) => NotifyError("Oops! something went wrong."));
    setLoading(false);
  };

  const login = async (email, password) => {
    await request
      .post("/auth/authenticate", {
        email: email,
        password: password,
      })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("token", res.data.token);
        NotifySuccess("Successfully logged in.");
      })
      .catch((err) => NotifyError("Username or password is incorrect."));

    setLoading(false);
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {!loading ? children : null}
    </AuthContext.Provider>
  );
};
