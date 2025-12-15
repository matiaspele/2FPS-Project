import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/navbar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="position-fixed top-0 start-50 translate-middle-x mt-2 barra py-3 px-4 d-flex align-items-center  z-3">
      <button
        className="hamburger-btn d-md-none me-3"
        onClick={() => setOpen(!open)}
      >
        <i className={`bi ${open ? "bi-x" : "bi-list"} fs-1`}></i>
      </button>

      <div className={`links d-flex gap-4 ${open ? "open" : ""}`}>
        <Link className="nav-link-custom" to="/">
          Inicio
        </Link>
        <Link className="nav-link-custom" to="/productos">
          Productos
        </Link>
        <Link className="nav-link-custom" to="/sobrenosotros">
          Sobre Nosotros
        </Link>
        <Link className="nav-link-custom" to="/contacto">
          Contacto
        </Link>
      </div>

      <div className="ms-auto d-flex gap-3">
        <Link to="/carrito">
          <i className="bi bi-cart icono"></i>
        </Link>
        <Link to="/perfil">
          <i className="bi bi-person icono"></i>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
