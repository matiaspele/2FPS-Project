import { Routes, Route } from "react-router-dom";
import LoginScreen from "../views/LoginScreen";

const RoutesPrincipal = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginScreen/>}/>
    </Routes>
  )
}

export default RoutesPrincipal
