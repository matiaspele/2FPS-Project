import productos from "../db/data.js";
import "../css/homeproducts.css";

const HomeProducts = () => {
  const primeros = productos.slice(0, 4);
  const segundos = productos.slice(4, 8);

  return (
    <section className="container-fluid">

      <div className="row g-4 justify-content-center mb-5">
        {primeros.map((p) => (
          <div key={p.id} className="col-6 col-md-3 col-lg-2">
            <div className="product-card text-center h-100">
              <img src={p.imagen} alt={p.nombre} />
              <h6>{p.nombre}</h6>
              <p className="price">${p.precio.toLocaleString()}</p>
              <small>{p.cuotas}</small>
            </div>
          </div>
        ))}
      </div>


      <div className="row  my-5">
        <div className="col-10 col-md-8  position-relative p-0">

          <div className="promo-banner">
            <p className="fuente-publicidad text-white">
              MCHOSE <br /> ACE 68
            </p>
          </div>


          <img
            src="/teclado.png"
            alt="Teclado"
            className="promo-img"
          />

        </div>
      </div>


      <div className="row g-4 justify-content-center">
        {segundos.map((p) => (
          <div key={p.id} className="col-6 col-md-3 col-lg-2 ">
            <div className="product-card text-center h-100">
              <img src={p.imagen} alt={p.nombre} />
              <h6>{p.nombre}</h6>
              <p className="price">${p.precio.toLocaleString()}</p>
              <small>{p.cuotas}</small>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default HomeProducts;
