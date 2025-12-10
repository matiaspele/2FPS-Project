import { useState } from "react";
import { useNavigate } from "react-router-dom";
import wasd from "../assets/wasd.png";
import "../css/login.css";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({ correo: "", password: "" });

  const handleChange = (e) =>
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  const admin = [
    {
      id: 1,
      correo: "admin@gmail.com",
      password: "123456",
      rol: "admin",
      nombre: "Luis",
    },
    {
      id: 2,
      correo: "admin2@gmail.com",
      password: "123456",
      rol: "admin",
      nombre: "Fernanda",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValue.correo && formValue.password) {
      const usuarioEncontrado = admin.find(
        (u) =>
          u.correo === formValue.correo && u.password === formValue.password
      );
      if (usuarioEncontrado) {
        navigate("/");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } else {
      alert("Correo o password vacío");
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

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control correo-icon input text-white"
                name="correo"
                placeholder="Correo electrónico"
                value={formValue.correo}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control password-icon input text-white"
                name="password"
                placeholder="Contraseña"
                value={formValue.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 d-grid">
              <button className="btn boton-iniciar">Iniciar sesión</button>
            </div>

            <p className="text-center text-white">
              ¿No tienes cuenta? <a href=""><span className="text-registro">Regístrate</span></a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
