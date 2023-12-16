import { useRef } from "react";
import { API_URL } from "../utils/const";
import { useContext } from "react";
import { AuthContext } from "../providers/authProvider";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const ref = useRef(null);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const user = {
      email,
      password,
    };
    const req = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (req.status !== 200) {
      // resetea lainformacion del formulario tanto dellogin como delregister
      ref.current.reset();
      return alert("Error al iniciar sesion");
    }

    const res = await req.json();

    login(res);

    ref.current.reset();

    navigate("/");
  };

  return (
    <div className="w-100 d-flex justify-content-center aling-items-center h-10">
      <form onSubmit={handleSubmit} ref={ref}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <div className="form-floating">
          <input
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="my-email@mail.com"
          />
          <label htmlFor="floatingInput"></label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            name="password"
            className="form-control"
            id="floatingInput"
            placeholder="******"
          />
          <label htmlFor="floatingInput"></label>
        </div>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDEfault"
          />
          <label htmlFor="flexCheckDefault">remember me</label>
          <button className="btn btn-primary w-100 py-2" type="submit">
            sing in
          </button>
        </div>
      </form>
    </div>
  );
};
