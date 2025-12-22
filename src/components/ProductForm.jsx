import { useState, useEffect } from "react";

const ProductForm = ({ product, onSave, form, setForm, update }) => {
  const mostrarProducto = (id) => {
    console.log();
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-96 p-3">
        <h2 className="text-xl font-bold p-3 text-center">
          {update ? "Editar producto" : "Agregar producto"}
        </h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Imagen "
          type="text"
          value={form.imagen}
          onChange={(e) => setForm({ ...form, imagen: e.target.value })}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Nombre"
          value={form.producto}
          onChange={(e) => setForm({ ...form, producto: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Precio"
          type="number"
          min="0"
          value={form.precio}
          onChange={(e) => {
            const value = e.target.value;
            if (value >= 0) {
              setForm({ ...form, precio: value });
            }
          }}
        />
        <input
          className="border p-2 w-full mb-2"
          placeholder="Descripcion "
          type="text"
          value={form.descripcion}
          onChange={(e) => setForm({ ...form, descripcion: e.target.value })}
        />

        <input
          className="border p-2 w-full mb-4"
          placeholder="Stock"
          type="number"
          min="0"
          step="1"
          value={form.stock}
          onChange={(e) => {
            const value = e.target.value;
            if (value >= 0) {
              setForm({ ...form, stock: value });
            }
          }}
        />

        <div className="flex justify-end gap-2">
          <button
            className="px-3 btn btn-primary py-1 text-white m-2"
            onClick={() => {
              onSave(form);
              update = false;
            }}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
