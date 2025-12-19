import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/navbar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setOpenUserMenu(false);
    navigate("/login"); 
  };

  return (
    <nav className="position-fixed top-0 start-50 translate-middle-x mt-2 barra py-3 px-4 d-flex align-items-center z-3">

      <button
        className="hamburger-btn d-md-none me-3"
        onClick={() => setOpen(!open)}
      >
        <i className={`bi ${open ? "bi-x" : "bi-list"} fs-1`}></i>
      </button>

      <div className={`links d-flex gap-4 ${open ? "open" : ""}`}>
        <Link className="nav-link-custom" to="/">Inicio</Link>
        <Link className="nav-link-custom" to="/productos">Productos</Link>
        <Link className="nav-link-custom" to="/sobrenosotros">Sobre Nosotros</Link>
        <Link className="nav-link-custom" to="/contacto">Contacto</Link>
      </div>

      <div className="ms-auto d-flex gap-3 position-relative">
        <Link to="/carrito">
          <i className="bi bi-cart icono"></i>
        </Link>

 
        <div className="position-relative">
          <i
            className={`bi ${user ? "bi-person-check" : "bi-person"} icono`}
            style={{ cursor: "pointer" }}
            onClick={() => setOpenUserMenu(!openUserMenu)}
          ></i>

          {openUserMenu && (
            <div className="dropdown-menu-custom">
              {!user ? (
                <>
                  <Link
                    to="/login"
                    className="dropdown-item"
                    onClick={() => setOpenUserMenu(false)}
                  >
                    Iniciar sesión
                  </Link>
                  <Link
                    to="/register"
                    className="dropdown-item"
                    onClick={() => setOpenUserMenu(false)}
                  >
                    Registrarse
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/perfil"
                    className="dropdown-item"
                    onClick={() => setOpenUserMenu(false)}
                  >
                    Mi perfil
                  </Link>
                  <button
                    className="dropdown-item logout-btn"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
