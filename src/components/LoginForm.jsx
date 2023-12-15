import { useRef } from "react";
import { API_URL } from "../utils/const";

export const LoginForm = () => {
  const ref = useRef(null);

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

    ref.current.reset();

    console.log(res);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} ref={ref}>
        <input type="email" placeholder="my-email@mail.com" name="email" />
        <input type="password" placeholder="******" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};
