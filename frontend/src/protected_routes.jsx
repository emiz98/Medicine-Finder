import { useEffect } from "react";
import { useAuth } from "./context/authContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (user?.role == "PHARMA") {
      navigate("/pharmacy");
    } else if (user?.role == "ADMIN") {
      navigate("/admin");
    } else if (user?.role == "USER") {
      navigate("/search");
    } else {
      navigate("/");
    }
  }, [user]);

  return children;
};

export default ProtectedRoute;
