import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";

export const HomePage = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
