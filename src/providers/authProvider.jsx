import { createContext, useEffect, useState } from "react";

// maneja el estado en un componente funcional de React y se crea un nuevo contexto
export const AuthContext = createContext();

//mantiene el estado de la autenticación en su estado local utilizando
function AuthProvider({ children }) {
  const [auth, setAuth] = useState(undefined);

  const login = ({ user, token }) => {
    setAuth({ user, token });

    localStorage.set("token", token);
    localStorage.set("user", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setAuth(null);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    // si no tenemos ninguno de los campos en el localStorage borramos todo
    if (!user || !token) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      setAuth(null);
      return;
    }

    setAuth({ user, token });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
