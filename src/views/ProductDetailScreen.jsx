import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/productdetails.css";

const ProductDetailScreen = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const data = localStorage.getItem("products");
    const productos = data ? JSON.parse(data) : [];

    const encontrado = productos.find((p) => p.id === Number(id));

    setProducto(encontrado);
  }, [id]);

  const sumar = () => {
    if (producto && cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  if (!producto) {
    return (
      <h2 className="text-white text-center mt-5">Producto no encontrado</h2>
    );
  }

  return (
    <div className="container-fluid ct  d-flex align-items-center justify-content-center">
      <div className=" row w-100">
          <div className="triangle-blue"></div>
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src={producto.imagen}
            alt={producto.producto}
            className="product-detail-img"
          />
        </div>

        <div className="col-md-7 text-white p-4">
          <h2 className="fw-bold">{producto.producto}</h2>

          <h4 className="text-light mt-2">${producto.precio}</h4>

          <p className="text-white-50 mt-3">{producto.descripcion}</p>

          <p className="mt-2">
            Stock disponible: <strong>{producto.stock}</strong>
          </p>

     
          <div className="d-flex align-items-center gap-3 mt-4">
            <button
              className="agregar-btn"
              onClick={restar}
              disabled={cantidad === 1}
            >
              −
            </button>

            <span className="fs-5">{cantidad}</span>

            <button
              className="agregar-btn"
              onClick={sumar}
              disabled={cantidad === producto.stock}
            >
              +
            </button>
          </div>

          <button
            className="btn carrito-btn mt-4 px-4"
            disabled={producto.stock === 0}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailScreen;
