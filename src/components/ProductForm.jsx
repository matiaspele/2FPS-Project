import { useState, useEffect } from "react";

const ProductForm = ({ product, onSave, onCancel }) => {
  const [form, setForm] = useState({
    producto: "",
    precio: "",
    descripcion:"",
    stock: "",
    imagen:"",
  });

  useEffect(() => {
    if (product) {
      setForm(product);
    }
  }, [product]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Producto</h2>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Nombre"
          value={form.producto}
          onChange={(e) =>
            setForm({ ...form, producto: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Precio"
          type="number"
          value={form.precio}
          onChange={(e) =>
            setForm({ ...form, precio: e.target.value })
          }
        />

        <input
          className="border p-2 w-full mb-4"
          placeholder="Stock"
          type="number"
          value={form.stock}
          onChange={(e) =>
            setForm({ ...form, stock: e.target.value })
          }
        />

        <div className="flex justify-end gap-2">
          <button className="px-3 py-1 border" onClick={onCancel}>
            Cancelar
          </button>

          <button
            className="px-3 py-1 bg-black text-white"
            onClick={() => onSave(form)}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
