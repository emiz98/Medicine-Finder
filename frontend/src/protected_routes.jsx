import { useEffect } from "react";
import { useAuth } from "./context/authContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return user ? children : children;
};

export default ProtectedRoute;
