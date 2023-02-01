import { createContext, useContext, useEffect, useState } from "react";
import request from "../../axios";

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
        .then(() => setLoading(false))
        .catch((err) => setLoading(false));
    } else {
      setLoading(false);
    }
  };

  const signup = async (email, password) => {
    const req = await request.post("/auth/register", {
      email: email,
      password: password,
    });
    setUser(req.data);
    localStorage.setItem("token", req.data.token);
    setLoading(false);
  };

  const login = async (email, password) => {
    const req = await request.post("/auth/authenticate", {
      email: email,
      password: password,
    });
    setUser(req.data);
    localStorage.setItem("token", req.data.token);
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
