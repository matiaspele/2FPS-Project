import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useForm } from "react-hook-form";
import wasd from "../assets/wasd.png";
import "../css/login.css";

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logIn, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(()=> {
  //   localStorage.removeItem("user");
  //   logOut()
  // }, [])

  const admin = [
    {
      id: 1,
      correo: "admin2@gmail.com",
      password: "123456",
      rol: "admin",
      nombre: "Fernanda",
    },
  ];

  const guardarUsuario = (data) => {
    if (!data.correo || !data.password) {
      alert("Correo o password vacío");
      return;
    }

    const usuariosLocal = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioLocal = usuariosLocal.find(
      (u) => u.correo === data.correo && u.password === data.password
    );

    const usuarioAdmin = admin.find(
      (u) => u.correo === data.correo && u.password === data.password
    );

    if (usuarioLocal || usuarioAdmin) {
      const usuarioActivo = usuarioLocal || usuarioAdmin;

      logIn(usuarioActivo.correo, usuarioActivo.nombre);

      localStorage.setItem(
        "user",
        JSON.stringify({
          correo: usuarioActivo.correo,
          name: usuarioActivo.nombre,
          isLogin: true,
        })
      );

      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="fondo d-flex vh-100 align-items-center justify-content-center">
      <div className="container-transparente d-flex flex-column flex-lg-row  p-4">
        <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          <img src={wasd} alt="logo" className="logo-img img-fluid" />
        </div>

        <div className="form-section text-white px-3 px-lg-5 ">
          <h1 className="text-center mb-4">Iniciar sesión</h1>

          <form onSubmit={handleSubmit(guardarUsuario)}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control correo-icon input text-white"
                placeholder="Correo electrónico"
                {...register("correo", {
                  required: "El correo el obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "No es un correo válido",
                  },
                })}
              />
              {errors.correo && (
                <p className="text-danger">{errors.correo.message}</p>
              )}
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control password-icon input text-white"
                placeholder="Contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  // pattern: {
                  //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,}$/,
                  //   message: "No es una contraseña válida"
                  // }
                })}
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

            <div className="mb-3 d-grid">
              <button className="btn boton-iniciar">Iniciar sesión</button>
            </div>

            <p className="text-center text-white">
              ¿No tienes cuenta?{" "}
              <a href="">
                <span className="text-registro">Regístrate</span>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
