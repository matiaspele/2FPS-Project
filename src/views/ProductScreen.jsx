import { useEffect, useState } from "react";
import "../css/Product.css";
import { Link } from "react-router-dom";


const ProductScreen = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("products");
    setProductos(data ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    document.body.classList.add("triangle-bg");

    return () => {
      document.body.classList.remove("triangle-bg");
    };
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-white text-center pt-5 pb-3">Productos</h1>

      <div className="row">
        {productos.map((p) => (
          <div
            className="col-6 col-md-3 col-lg-2 mb-4 d-flex justify-content-center"
            key={p.id}
          >
            <div className="card h-100 text-center w-100 card-hov">
              {p.imagen && (
                <img
                  src={p.imagen}
                  alt={p.producto}
                  className="mx-auto mt-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div className="card-body p-2">
                <h6 className="card-title">{p.producto}</h6>
              </div>

              <div className="card-footer py-2">
                <span className="fw-bold">Precio: ${p.precio}</span>
                <Link
                  to={`/producto/${p.id}`}
                  className="btn btn-outline-primary btn-sm w-100"
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScreen;
