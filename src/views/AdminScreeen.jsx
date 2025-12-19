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
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    producto: "",
    precio: "",
    descripcion: "",
    stock: "",
    imagen: "",
  });
  useEffect(() => {
    document.body.classList.add("bg-admin");

    return () => {
      document.body.classList.remove("bg-admin");
    };
  }, []);

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

  const productosFiltrados = products.filter((p) =>
    p.producto.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container margen">
      <h1 className="m-5 fw-bold text-white pt-3">Panel de Administración</h1>
      <div className="table-responsive">
        {
          <ProductForm
            form={form}
            setForm={setForm}
            onSave={agregarProducto}
            update={update}
          />
        }
        <div className="table-responsive">
          <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
            <h2 className="fw-bold text-white m-3">Productos agregados</h2>

            <div className="col-12 col-md-4">
              <div className="input-group">
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2 bg-dark text-white"
                    type="search"
                    placeholder="Buscar producto.."
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span className="input-group-text btn btn-outline-primary">
                    <i className="bi bi-search"></i>
                  </span>
                </form>
              </div>
            </div>
          </div>

          <table className="table table-bordered table-hover align-middle mt-5">
            <thead className="table-dark p-3">
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
              {productosFiltrados.map((p) => (
                <tr key={p.id}>
                  <td className="text-center align-middle">
                    {p.imagen && (
                      <img
                        src={p.imagen}
                        alt={p.producto}
                        style={{ width: "100px", height: "auto" }}
                      />
                    )}
                  </td>
                  <td>{p.producto}</td>
                  <td>${p.precio}</td>
                  <td>{p.descripcion}</td>
                  <td>{p.stock}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-warning bi bi-pencil-square me-2"
                      onClick={() => actualizarProducto(p)}
                    ></button>
                    <button
                      className="btn btn-sm btn-danger bi bi-trash3"
                      onClick={() => eliminarProducto(p.id)}
                    ></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AdminScreen;
