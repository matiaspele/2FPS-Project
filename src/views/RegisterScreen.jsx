import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import wasd from "../assets/wasd.png";
import "../css/login.css";

const RegisterScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const registrarUsuario = (data) => {
    const usuariosPrevios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuariosPrevios.some((u) => u.correo === data.correo);

    if (existe) {
      alert("Este correo ya está registrado");
      return;
    }

    const nuevoUsuario = {
      id: Date.now(),
      nombre: data.nombre,
      correo: data.correo,
      password: data.password,
      rol: "user",
    };

    localStorage.setItem(
      "usuarios",
      JSON.stringify([...usuariosPrevios, nuevoUsuario])
    );
    navigate("/login");
  };

  return (
    <div className="fondo d-flex vh-100 align-items-center justify-content-center">
      <div className="container-transparente d-flex flex-column flex-lg-row  p-4">
        <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          <img src={wasd} alt="logo" className="logo-img img-fluid" />
        </div>
        <div className="form-section text-white px-3 px-lg-5 ">
          <h1 className="text-center text-white mb-4">Regístrate</h1>

          <form onSubmit={handleSubmit(registrarUsuario)}>
            <input
              className="form-control user-icon input text-white mb-3"
              placeholder="Nombre completo"
              {...register("nombre", { required: "El nombre es obligatorio" })}
            />
            {errors.nombre && (
              <p className="text-danger">{errors.nombre.message}</p>
            )}

            <input
              className="form-control correo-icon input text-white mb-3"
              placeholder="Correo electrónico"
              {...register("correo", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Correo inválido",
                },
              })}
            />
            {errors.correo && (
              <p className="text-danger">{errors.correo.message}</p>
            )}

            <input
              type="password"
              className="form-control password-icon input text-white mb-3"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}

            <button className="btn boton-iniciar w-100">Crear cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
