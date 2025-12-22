import "../css/about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Facu from '../assets/Facu.png';
import Celeste from '../assets/Celeste.jpeg';
import MatiasPelegrina from '../assets/MatiasPelegrina.jpg';
import Medina from '../assets/Medina.jpeg';
import compu from '../assets/compu.png';



const AboutScreen = () => {


  return (
    <div className="m-cont">
      <main className="main">
        <h1 className="h1-about text-center">Conocenos</h1>
        <div className="containern1">
          <div>
            
            <p>Somos un equipo de desarrollo formado en Rolling Code School. Este proyecto corresponde al trabajo final del Módulo 2, en el cual desarrollamos un e-commerce de periféricos, poniendo en práctica los conocimientos adquiridos a lo largo de la cursada.
            Durante el desarrollo aplicamos conceptos de maquetado web, diseño responsivo, lógica de programación y trabajo en equipo, utilizando herramientas y tecnologías modernas. El proyecto refleja nuestro compromiso con el aprendizaje, la mejora continua y la creación de soluciones funcionales orientadas a la experiencia del usuario.
            Este e-commerce representa un paso importante en nuestra formación como desarrolladores, consolidando las bases necesarias para afrontar proyectos más complejos en el futuro.</p>
          </div>
        <img src={compu} className="img-about img-compu" alt="Computadora" />
      </div>
      <h2 className="h2">Conoce al equipo</h2>
        <div className="containern2">
            <div className="card-about">
              <div className="img-container">
                <img src={Facu} className="img-about" alt="Facundo Vera" />
              </div>
                <h3>Facundo Vera</h3>
                <div className="line"></div>
                <p>Actualmente estoy estudiando Desarrollo Web en RollingCode School. Me encuentro en un proceso continuo de aprendizaje.</p>
                <div className="line"></div>
                <div className="incont">
                  <a href="https://github.com/Facundo-Vera" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faGithub} style={{ color: '#fff' }} />
                  </a>
                  <a href="https://www.linkedin.com/in/facundo-vera-175101378/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} style={{ color: '#0077b5', backgroundColor: "#fff", borderRadius: "3px" }} />
                  </a>
                </div>
            </div>
            <div className="card-about">
              <div className="img-container">
                <img src={MatiasPelegrina} className="img-about" alt="Matías Pelegrina" />
              </div>
                <h3>Matías Pelegrina</h3>
                <div className="line"></div>
                <p>Desarrolador principiante Fullstack, facilidad con el inglés,estudiante de RollingCode.</p>
                <div className="line"></div>
                <div className="incont">
                  <a href="https://github.com/matiaspele" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faGithub} style={{ color: '#fff' }} />
                  </a>
                  <a href="https://www.linkedin.com/in/matias-pelegrina-55512a3a1/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} style={{ color: '#0077b5', backgroundColor: "#fff", borderRadius: "3px" }} />
                  </a>
                </div>
            </div>
            <div className="card-about">
              <div className="img-container">
                <img src={Medina} className="img-about" alt="Michael Medina" />
              </div>
                <h3>Michael Medina</h3>
                <div className="line"></div>
                <p>Estudiante de 17 años, alto nivel en inglés, aficionado de las ciencias exactas, estudiando programación en RollingCode School</p>
                <div className="line"></div>
                <div className="incont">
                  <a href="https://github.com/Michael110908" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faGithub} style={{ color: '#fff' }} />
                  </a>
                  <a href="https://www.linkedin.com/in/michael-rony-medina-velasco-832b42382/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} style={{ color: '#0077b5', backgroundColor: "#fff", borderRadius: "3px" }} />
                  </a>
                </div>
            </div>
            <div className="card-about">
              <div className="img-container">
                <img id="tdo" src={Celeste} className="img-about" alt="Michael Medina" />
              </div>
                <h3>Celeste Soto</h3>
                <div className="line"></div>
                <p>Me encuentro cursando la Licenciatura en Informática y complemento mi formación con un curso de Desarrollo Web en Rolling School.</p>
                <div className="line"></div>
                <div className="incont">
                  <a href="https://github.com/celestemariel28" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faGithub} style={{ color: '#fff' }} />
                  </a>
                  <a href="https://www.linkedin.com/in/celeste-mariel-soto/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="icon" icon={faLinkedin} style={{ color: '#0077b5', backgroundColor: "#fff", borderRadius: "3px" }} />
                  </a>
                </div>
            </div>
        </div>
      </main>
    <div className="tri i-tri"></div>
    <div className="tri d-tri"></div>
    </div>
  )
}

export default AboutScreen
