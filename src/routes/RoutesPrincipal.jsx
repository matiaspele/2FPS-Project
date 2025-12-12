import { Routes, Route } from "react-router-dom";
import LoginScreen from "../views/LoginScreen";
import RegisterScreen from "../views/RegisterScreen";

const RoutesPrincipal = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginScreen/>}/>
        <Route path="register" element={<RegisterScreen/>}/>
    </Routes>
  )
}

export default RoutesPrincipal
