import { use, useEffect, useState } from "react"

const AdminScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const guardarProductos = JSON.parse(localStorage.getItem("products"))
        setProducts(setProducts);
    }, []);

    useEffect(()=>{
        localStorage.setItem("products", JSON.stringify(products))
    }, [products])

    const agregarProducto = (products)=>{
        setProducts([...products,{...products, id:Date.now()}])
    }

    const actualizarProducto = (actualizarProducto)=>{
        setProducts(products.map(procduct => product.id === guardarProductos ? actualizarProducto:product));
    }

    return(
        <div>

        </div>
    )
}
export default AdminScreen