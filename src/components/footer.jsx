import React from 'react';
import { Link } from 'react-router-dom';


import camionIcon from '../assets/camion.png';
import tarjetaIcon from '../assets/targeta.png';
import supportIcon from '../assets/24hours.png';
import wasdLogo from '../assets/wasd.png'; 
import instagramIcon from '../assets/instagram.png';
import googleIcon from '../assets/icons8-logo-de-google-96.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 pt-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container">
        
        {/*  SECCIÓN SUPERIOR  */}
        <div className="row mb-5 text-center">
          
          {/*  Envíos */}
          <div className="col-12 col-lg-4 mb-4">
            <div className="border border-secondary p-4 h-100 d-flex flex-column align-items-center justify-content-center rounded">
              <img src={camionIcon} alt="Envíos" width="50" className="mb-3" style={{filter: 'invert(1)'}} />
              <h5 className="fw-bold">Realizamos envíos</h5>
              <small className="text-white-50">Conoce nuestros medios de envíos disponibles</small>
            </div>
          </div>

          {/* Pagos */}
          <div className="col-12 col-lg-4 mb-4">
            <div className="border border-secondary p-4 h-100 d-flex flex-column align-items-center justify-content-center rounded">
              <img src={tarjetaIcon} alt="Pagos" width="50" className="mb-3" style={{filter: 'invert(1)'}} />
              <h5 className="fw-bold">Paga tus compras aquí</h5>
              <small className="text-white-50">Conoce nuestros medios de pago disponibles</small>
            </div>
          </div>

          {/* Soporte */}
          <div className="col-12 col-lg-4 mb-4">
            <div className="border border-secondary p-4 h-100 d-flex flex-column align-items-center justify-content-center rounded">
              <img src={supportIcon} alt="Soporte 24hs" width="50" className="mb-3" style={{filter: 'invert(1)'}} />
              <h5 className="fw-bold">Soporte</h5>
              <small className="text-white-50">Comunícate con nosotros</small>
            </div>
          </div>
        </div>

        {/* SECCIÓN PRINCIPAL DEL FOOTER  */}
        <div className="row">
          
          {/*  1 Contacto */}
          <div className="col-12 col-md-3 mb-4">
            {/* Logo WASD */}
            <div className="mb-3">
                
                <img src={wasdLogo} alt="WASD Logo" width="150" />
            </div>
            
            <p className="small text-white-50">
              Tienda Gamer de computación y videojuegos, ubicada en Córdoba. 
              Contamos con variedad en juegos de Ps4, Nintendo Switch, Mouse, 
              teclados mecánicos y componentes para que armes tu Pc a medida.
            </p>
            <ul className="list-unstyled small text-white-50">
              <li className="mb-2">📍 Tucumán 127, Córdoba, Argentina.</li>
              <li className="mb-2">📱 +5493517719671</li>
              <li className="mb-2">🕒 Lunes a Viernes de 10 a 18:30 hs - Sábados de 10 a 14 hs</li>
              <li className="mb-2">✉️ ventas@wasdgamer.com.ar</li>
            </ul>
          </div>

          {/* Información */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Información</h5>
            <ul className="list-unstyled">
              
              <li className="mb-2"><Link to="/" className="text-decoration-none text-white">Home</Link></li>
              <li className="mb-2"><Link to="/ubicacion" className="text-decoration-none text-white">Ubicanos</Link></li>
              <li className="mb-2"><Link to="/pedidos" className="text-decoration-none text-white">Mis Pedidos</Link></li>
              <li className="mb-2"><Link to="/arma-tu-pc" className="text-decoration-none text-white">Arma tu Pc</Link></li>
              <li className="mb-2"><Link to="/terminos" className="text-decoration-none text-white">Términos y condiciones</Link></li>
              <li className="mb-2"><Link to="/promociones" className="text-decoration-none text-white">Promociones con tarjeta</Link></li>
              <li className="mb-2"><Link to="/outlet" className="text-decoration-none text-white">Outlet</Link></li>
              <li className="mb-2"><Link to="/arrepentimiento" className="text-decoration-none text-white">Botón de Arrepentimiento</Link></li>
            </ul>
          </div>

          {/* Categorías */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Categorías</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/categoria/componentes" className="text-decoration-none text-white">Componentes de Pc</Link></li>
              <li className="mb-2"><Link to="/categoria/perifericos" className="text-decoration-none text-white">Periféricos</Link></li>
              <li className="mb-2"><Link to="/categoria/videojuegos" className="text-decoration-none text-white">Videojuegos</Link></li>
              <li className="mb-2"><Link to="/categoria/monitores" className="text-decoration-none text-white">Monitores</Link></li>
              <li className="mb-2"><Link to="/categoria/notebooks" className="text-decoration-none text-white">Notebooks</Link></li>
              <li className="mb-2"><Link to="/categoria/pc-armadas" className="text-decoration-none text-white">Pc Armadas</Link></li>
              <li className="mb-2"><Link to="/categoria/sillas" className="text-decoration-none text-white">Sillas Gamer</Link></li>
              <li className="mb-2"><Link to="/categoria/tabletas" className="text-decoration-none text-white">Tabletas Gráficas</Link></li>
              <li className="mb-2"><Link to="/categoria/almacenamiento" className="text-decoration-none text-white">Almacenamiento</Link></li>
              <li className="mb-2"><Link to="/categoria/conectividad" className="text-decoration-none text-white">Conectividad y Cables</Link></li>
            </ul>
          </div>

          {/* Newsletter*/}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="small text-white-50">Suscribite a nuestro Newsletter para enterarte de promociones</p>
            <form className="d-flex mb-4">
              <input type="email" className="form-control me-2" placeholder="Email..." />
              
              <button className="btn btn-light fw-bold" type="submit">Suscribirme</button>
            </form>

            <h5 className="fw-bold mb-3">Seguinos!</h5>
            <div className="d-flex gap-2 mb-3">
               
               {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ff3d6f', 
                  borderRadius: '50%',
                }}
              >
                 <img src={instagramIcon} alt="Instagram" width="22" />
              </a>

               {/* Google*/}
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ffc107', 
                  borderRadius: '50%',
                }}
              >
                 <img src={googleIcon} alt="Google" width="22" />
              </a>

            </div>


          </div>

        </div>
      </div>
      
      {/* Copy */}
      <div className="text-center py-3 bg-black mt-4 border-top border-secondary">
        <small className="text-white-50">© 2025 WASD. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
