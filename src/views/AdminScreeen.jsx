import { useEffect, useState } from "react";
import "../css/admin.css";
import ProductForm from "../components/ProductForm";

const AdminScreen = () => {
  const listProductos = [
    {
      id: 1,
      producto: "Mouse logitech",
      precio: "$100",
      descripcion:
        "Diseño simétrico y ambidiestro con botones laterales magnéticos personalizables; memoria interna para guardar configuraciones; compatible con el software Logitech G HUB para personalización avanzada.",
      stock: "10",
      imagen:
        "https://acdn-us.mitiendanube.com/stores/005/542/994/products/ms-scyroxv6-wh-2-e61b9e0c890152b09517450296034437-640-0.webp",
    },
    {
      id: 2,
      producto: "Mchose V9 PRO ",
      precio: "$130",
      descripcion:
        "Disfrute de una calidad de sonido nítida y rica. El diafragma de biocelulosa de cada altavoz garantiza una experiencia de audio equilibrada e inmersiva.",
      stock: "5",
      imagen:
        "https://acdn-us.mitiendanube.com/stores/005/542/994/products/mchose-v9-pv-af88c8708c4b9ace6e17659237565095-1024-1024.webp",
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const guardarProductos = JSON.parse(localStorage.getItem("products"));
    setProducts(guardarProductos || listProductos);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const agregarProducto = (nuevoPrduct) => {
    setProducts([...products, { ...nuevoPrduct, id: Date.now() }]);
  };

  const actualizarProducto = (actualizarProduct) => {
    setProducts(
      products.map((product) =>
        product.id === actualizarProduct.id ? actualizarProduct : product
      )
    );
  };
  const eliminarProducto = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container margen">
      <h1 className="mb-4 fw-bold text-white">Panel de Administración</h1>

      <button
        className="btn btn-primary mb-3"
        onClick={() =>
          actualizarProducto({
            producto: "",
            precio: "",
            descripcion: "",
            stock: "",
            imagen: "",
          })
        }
      >
        Agregar producto
      </button>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Stock</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>
                  {p.imagen && (
                    <img
                      src={p.imagen}
                      alt={p.producto}
                      style={{ width: "60px", height: "auto" }}
                    />
                  )}
                </td>
                <td>{p.producto}</td>
                <td>${p.precio}</td>
                <td>{p.descripcion}</td>
                <td>{p.stock}</td>
                <td className="text-center">
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => actualizarProducto(p)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => eliminarProducto(p.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {actualizarProducto && (
        <ProductForm
          products={actualizarProducto}
          onSave={agregarProducto}
          onCancel={() => actualizarProducto(null)}
        />
      )}
    </div>
  );
};
export default AdminScreen;
