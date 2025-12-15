import { Routes, Route } from "react-router-dom";
import LoginScreen from "../views/LoginScreen";

const RoutesPrincipal = () => {
  return (
    <Routes>
      {/* <Route
        path="/"
        element={
          <ProtectedRoute>
            <PagesLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomeScreen />} />
        <Route path="productos/:id" element={<ProductosScreen/>}/>
        <Route path="sobrenosotros" element={<SobreNosotros/>}/>
        <Route path="*" element={<Error404Screen />} />

      </Route> */}
        <Route path="login" element={<LoginScreen/>}/>
    </Routes>
  )
}

export default RoutesPrincipal
