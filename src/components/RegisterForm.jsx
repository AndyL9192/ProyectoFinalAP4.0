import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/const";

export const RegisterForm = () => {
  const ref = useRef(null);
  //una useNavigate para redirigir a la pagina deseada
  const navigate = useNavigate();

  //captura la informacion del formulario y prevenir que se recaargue lapagina
  const handleSubmit = async (e) => {
    e.preventDefault();

    //guarda la informacion del formulario para usar en el back end
    const formData = new FormData(e.target);

    const avatar = formData.get("avatar");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    //guardo en un objeto los datos delusuario
    const user = {
      avatar,
      email,
      username,
      password,
    };

    // Le indicamos que vamos a usar elmetodo POST y la informacion a enviar
    //headers : es una cabecera que indica que la informacion a enviar es de tipo
    const req = await fetch(`${API_URL}/register`, {
      method: "POST",
      // convierte cualquier objeto de javaScript en Json
      body: JSON.stringify(user),
      // headers le avisa que la info es en tipo json
      headers: {
        "Content-type": "application/json",
      },
    });

    // pregunta si la respuesta tiene status code 201
    if (req.status !== 201) return alert("Error al registrar usuario");

    ref.current.reset();

    // envia al usuario a la pagina de login despues que este se registre
    navigate("/login");
  };

  return (
    <div>
      <h1>registrarse</h1>
      <form onSubmit={handleSubmit} ref={ref}>
        <input type="url" placeholder="http:google.com" name="avatar" />
        <input type="email" placeholder="email@mail.com" name="email" />
        <input type="text" placeholder="Joe Doe" name="username" />
        <input type="password" placeholder="******" name="password" />
        <button>registrar</button>
      </form>
    </div>
  );
};
