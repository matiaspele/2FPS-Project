import { Routes, Route } from "react-router-dom";
import LoginScreen from "../views/LoginScreen";
import PagesLayout from "../layout/PagesLayout";

const RoutesPrincipal = () => {
  return (
    <Routes>
      <Route  path="/" element={PagesLayout}>
       
      </Route>
       <Route path="login" element={<LoginScreen/>}/>
    </Routes>
  )
}

export default RoutesPrincipal
