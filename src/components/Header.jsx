import "../css/header.css";

const Header = () => {
  return (
    <div className="min-vh-100 w-100 contenedor">
      <div className="triangulo"></div>
      <h1 className="titulo">WASD</h1>
         <h1 className="titulo-borde">WASD</h1>
      <p className="text-secondary subtitulo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
      <img src="../public/Auriculares-negros.png" alt="auriculares" className="imagen" />
      <div className="sombra"></div>
    </div>
  );
};

export default Header;
