import React from 'react';
import { Link } from 'react-router-dom';


import '../css/footer.css';


import camionIcon from '../assets/camion.png';
import tarjetaIcon from '../assets/targeta.png';
import supportIcon from '../assets/24hours.png';
import wasdLogo from '../assets/wasd.png';
import instagramIcon from '../assets/instagram.png';
import googleIcon from '../assets/icons8-logo-de-google-96.png';
import whatsappIcon from '../assets/whatsapp.png';

const Footer = () => {
  return (
    
    <footer className="wasd-footer mt-5 pt-5">
      <div className="container">
        
        {/*Iconos de servicio*/}
        <div className="row mb-5 text-center">
          
          {/* Envíos */}
          <div className="col-12 col-lg-4 mb-4">
            <div className="border border-secondary p-4 h-100 d-flex flex-column align-items-center justify-content-center rounded">
              <img src={camionIcon} alt="Envíos" width="50" className="mb-3 footer-icon-invert" />
              <h5 className="fw-bold">Realizamos envíos</h5>
              <small className="text-white-50">Conoce nuestros medios de envíos disponibles</small>
            </div>
          </div>

          {/* Pagos */}
          <div className="col-12 col-lg-4 mb-4">
            <div className="border border-secondary p-4 h-100 d-flex flex-column align-items-center justify-content-center rounded">
              <img src={tarjetaIcon} alt="Pagos" width="50" className="mb-3 footer-icon-invert" />
              <h5 className="fw-bold">Paga tus compras aquí</h5>
              <small className="text-white-50">Conoce nuestros medios de pago disponibles</small>
            </div>
          </div>

          {/*Soporte */}
          <div className="col-12 col-lg-4 mb-4">
            <div className="border border-secondary p-4 h-100 d-flex flex-column align-items-center justify-content-center rounded">
              <img src={supportIcon} alt="Soporte 24hs" width="50" className="mb-3 footer-icon-invert" />
              <h5 className="fw-bold">Soporte</h5>
              <small className="text-white-50">Comunícate con nosotros</small>
            </div>
          </div>
        </div>

        {/* SECCIÓN PRINCIPAL */}
        <div className="row">
          
          {/*  1 Marca y Contacto */}
          <div className="col-12 col-md-3 mb-4">
            <div className="mb-3">
                <img src={wasdLogo} alt="WASD Logo" width="150" />
            </div>
            
            <p className="small text-white-50">
              Tienda Gamer de computación y videojuegos, ubicada en Tucumán. 
              Contamos con variedad en  Mouse, 
              teclados mecánicos y componentes para que armes tu Pc a medida.
            </p>
            <ul className="list-unstyled small text-white-50">
              <li className="mb-2">📍 San Miguel 1130, Tucumán, Argentina.</li>
              <li className="mb-2">📱 +5493517719671</li>
              <li className="mb-2">🕒 Lunes a Viernes de 10 a 18:30 hs - Sábados de 10 a 14 hs</li>
              <li className="mb-2">✉️ ventas@wasdgamer.com.ar</li>
            </ul>
          </div>

          {/*  2 Información */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Información</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="#" className="text-decoration-none text-white lista-footer">Home</Link></li>
              <li className="mb-2"><Link to="https://maps.app.goo.gl/56WfhzK5Br4McqYz6" className="text-decoration-none text-white lista-footer" target='blank_'>Ubicanos</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Mis Pedidos</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Arma tu Pc</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Términos y condiciones</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Promociones con tarjeta</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Outlet</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Botón de Arrepentimiento</Link></li>
            </ul>
          </div>

          {/* 3 Categorías */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Categorías</h5>
            <ul className="list-unstyled ">
              <li className="mb-2"><Link id="#lista-footer" to="" className="text-decoration-none text-white lista-footer">Componentes de Pc</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Periféricos</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Videojuegos</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Monitores</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Notebooks</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Pc Armadas</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Sillas Gamer</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Tabletas Gráficas</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Almacenamiento</Link></li>
              <li className="mb-2"><Link to="" className="text-decoration-none text-white lista-footer">Conectividad y Cables</Link></li>
            </ul>
          </div>

          {/*  4 Newsletter */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="small text-white-50">Suscribite a nuestro Newsletter para enterarte de promociones</p>
            <form className="d-flex mb-4">
              <input type="email" className="form-control me-2" placeholder="Email..." />
              <button className="btn btn-light fw-bold" type="submit">Suscribirme</button>
            </form>

            <h5 className="fw-bold mb-3">Seguinos!</h5>
            <div className="d-flex gap-2 mb-3">
               
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle social-instagram"
              >
                 <img src={instagramIcon} alt="Instagram" width="32" />
              </a>

              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle social-google"
              >
                 <img src={googleIcon} alt="Google" width="30" />
              </a>

               <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-circle social-whatsapp"
              >
                 <img src={whatsappIcon} alt="whatsapp" width="32" />
              </a>

            </div>

          </div>

        </div>
      </div>
      
      <div className="text-center py-3 border-top border-secondary mt-4">
        <small className="text-white-50">© 2025 WASD. Todos los derechos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;