import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/Error404.css'; 


import mouseImage from '../assets/mousegamer.png';
import bgVector from '../assets/Vector.png'; 

const Error404 = () => {
  return (
    
    <div className="error-container d-flex justify-content-center align-items-center w-100">
      
      
      <img 
        src={bgVector} 
        alt="Fondo decorativo" 
        className="bg-picos" 
      />

     
      <div className="content-wrapper d-flex flex-column align-items-center">
        
        <div className="d-flex align-items-center justify-content-center position-relative">
          <span className="huge-number">4</span>
          
         
          <img 
            src={mouseImage} 
            alt="Mouse gamer" 
            className="mouse-zero img-fluid" 
          />
          
          <span className="huge-number">4</span>
        </div>

        <div className="text-center mt-3">
          <p className="error-text">not found :(</p>
          
          <button className="btn btn-outline-light mt-4 rounded-pill px-5 py-2 fw-bold">
            Volver al Inicio
          </button>
        </div>

      </div>
    </div>
  );
};

export default Error404;