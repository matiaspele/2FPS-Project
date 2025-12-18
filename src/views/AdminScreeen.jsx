import { useEffect, useState } from "react";
import "../css/admin.css";
import ProductForm from "../components/ProductForm";

const AdminScreen = () => {
  const formInicial = {
    producto: "",
    precio: "",
    descripcion: "",
    stock: "",
    imagen: "",
  };

  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);
  const [idupdate, setIdupdate] = useState(null);

  const [form, setForm] = useState({
    producto: "",
    precio: "",
    descripcion: "",
    stock: "",
    imagen: "",
  });

  useEffect(() => {
    const guardarProductos = JSON.parse(localStorage.getItem("products"));
    if (guardarProductos && guardarProductos.length > 0) {
      setProducts(guardarProductos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const agregarProducto = (nuevoPrduct) => {
    if (
      nuevoPrduct.producto === "" ||
      nuevoPrduct.precio === "" ||
      nuevoPrduct.stock === ""
    ) {
      alert("Completa los campos obligatorios");
      return;
    }
    if (update) {
      setProducts(
        products.map((p) =>
          p.id === idupdate ? { ...nuevoPrduct, id: idupdate } : p
        )
      );
    } else {
      setProducts([...products, { ...nuevoPrduct, id: Date.now() }]);
    }

    setForm(formInicial);
    setUpdate(false);
    setIdupdate(null);
  };

  const actualizarProducto = (producto) => {
    setForm(producto);
    setUpdate(true);
    setIdupdate(producto.id);
  };

  const eliminarProducto = (id) => {
    const productoEncontrado = products.find((p) => p.id === id);
    const validar = confirm(
      `¿Estás seguro que quieres eliminar el priducto: ${productoEncontrado.producto} ?`
    );
    if (validar) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <div className="container margen bg-dark">
      <h1 className="mb-4 fw-bold text-white">Panel de Administración</h1>
      <div className="table-responsive">
        {
          <ProductForm
            form={form}
            setForm={setForm}
            onSave={agregarProducto}
            update={update}
          />
        }
        <table className="table table-bordered table-hover align-middle mt-5">
          <thead className="table-dark ">
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
    </div>
  );
};
export default AdminScreen;
