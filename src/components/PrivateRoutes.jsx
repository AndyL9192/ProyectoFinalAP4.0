import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/authProvider";
import { Navbar } from "reactstrap";

export const PrivateRoutes = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth === null) {
      navigate("/login");
    }
  }, [auth, navigate]);

  if (auth === undefined) return <div>Loding...</div>;

  return (
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
  );
};
