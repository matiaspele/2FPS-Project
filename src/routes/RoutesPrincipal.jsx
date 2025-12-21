import { Routes, Route } from "react-router-dom";
import LoginScreen from "../views/LoginScreen";
import HomeScreen from "../views/HomeScreen";
import RegisterScreen from "../views/RegisterScreen";
import AdminScreen from "../views/AdminScreeen";
import ProductScreen from "../views/ProductScreen";
import Error404 from "../components/Error404"


const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route  index element={<HomeScreen/>}/>
        <Route path="login" element={<LoginScreen/>}/>
        <Route path="register" element={<RegisterScreen/>}/>
        <Route path="admin" element={<AdminScreen/>}/>
        <Route path="producto" element={<ProductScreen/>}/>
       <Route path="error404" element={<Error404/>}/>
    </Routes>
  )
}

export default RoutesPrincipal
