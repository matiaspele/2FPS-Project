import "../css/header.css";
import Auricularesnegros from '../assets/Auricularesnegros.png';

const Header = () => {
  return (
   <div className="min-vh-100 w-100 contenedor d-flex  flex-column  align-items-center">
      <div className="triangulo"></div>

         <div className="contenedor-titulos">
    <h1 className="titulo">WASD</h1>
    <h1 className="titulo-borde">WASD</h1>
    <p className="subtitulo ">Equipá tu setup. Mejorá tu juego.</p>
  </div>

      <img
        src={Auricularesnegros}
        alt="auriculares"
        className="imagen"
      />

      <div className="sombra"></div>
    </div>
  );
};

export default Header;
