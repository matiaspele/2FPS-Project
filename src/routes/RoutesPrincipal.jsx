import { Routes, Route } from "react-router-dom";
import LoginScreen from "../views/LoginScreen";
import HomeScreen from "../views/HomeScreen";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route  index element={<HomeScreen/>}/>
        <Route path="login" element={<LoginScreen/>}/>
    </Routes>
  )
}

export default RoutesPrincipal
