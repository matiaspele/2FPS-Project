import { useEffect, useState } from "react"

const ProductScreen = () => {
    const[productos,setProductos] = useState([]);
    useEffect(()=>{
        const data = localStorage.getItem("products");
        setProductos(data ? JSON.parse(data) : []);

    }, [])
  return (
    <div>
        {
            productos.map((p)=> (
                <div key={p.id}>
                     <h1>{p.producto}</h1>
                     <img src={p.imagen} alt="" />
                </div>
            ))
        }

    </div>
  )
}

export default ProductScreen
