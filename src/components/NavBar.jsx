import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/navbar.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const { user, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const isAdmin = user?.rol === "admin";

  const handleLogout = () => {
    logOut();
    setOpenUserMenu(false);
    navigate("/login");
  };

  return (
    <nav className="position-fixed top-0 start-50 translate-middle-x mt-2 barra py-3 px-4 d-flex align-items-center z-3">
      
      {/* BOTÓN HAMBURGUESA */}
      <button
        className="hamburger-btn d-md-none me-3"
        onClick={() => setOpen(!open)}
      >
        <i className={`bi ${open ? "bi-x" : "bi-list"} fs-1`}></i>
      </button>

      {/* LINKS */}
      <div className={`links ${open ? "open" : ""}`}>
        <Link
          className="nav-link-custom"
          to={isAdmin ? "/admin" : "/"}
          onClick={() => setOpen(false)}
        >
          Inicio
        </Link>

        <Link
          className="nav-link-custom"
          to="/producto"
          onClick={() => setOpen(false)}
        >
          Productos
        </Link>

        {!isAdmin && (
          <>
            <Link
              className="nav-link-custom"
              to="/sobrenosotros"
              onClick={() => setOpen(false)}
            >
              Sobre Nosotros
            </Link>

            <Link
              className="nav-link-custom"
              to="/contacto"
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
          </>
        )}
      </div>

      {/* ICONOS DERECHA */}
      <div className="ms-auto d-flex gap-3 position-relative">
        {!isAdmin && (
          <Link to="/carrito">
            <i className="bi bi-cart icono"></i>
          </Link>
        )}

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
                <button
                  className="dropdown-item logout-btn"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
