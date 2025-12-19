import { Routes, Route } from "react-router-dom";
import LoginScreen from "../views/LoginScreen";
import HomeScreen from "../views/HomeScreen";
import RegisterScreen from "../views/RegisterScreen";
import AdminScreen from "../views/AdminScreeen";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route  index element={<HomeScreen/>}/>
        <Route path="login" element={<LoginScreen/>}/>
        <Route path="register" element={<RegisterScreen/>}/>
        <Route path="admin" element={<AdminScreen/>}/>
    </Routes>
  )
}

export default RoutesPrincipal
