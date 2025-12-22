import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import LoginScreen from "../views/LoginScreen";
import HomeScreen from "../views/HomeScreen";
import RegisterScreen from "../views/RegisterScreen";
import AdminScreeen from "../views/AdminScreeen";
import ProductScreen from "../views/ProductScreen";
import Error404 from "../components/Error404";
import ProtectedRoute from "./ProtectedRoute";
import AboutScreen from "../views/AboutScreen";
import ProductDetailScreen from "../views/ProductDetailScreen";
import PagesLayout from "../layout/PagesLayout";

const RoutesPrincipal = () => {
  const { user } = useContext(UserContext);

  return (
    <Routes>


      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      <Route path="*" element={<Error404 />} />


      <Route element={<PagesLayout />}>

        <Route
          index
          element={
            user?.rol === "admin"
              ? <Navigate to="/admin" replace />
              : <HomeScreen />
          }
        />

        <Route path="sobrenosotros" element={<AboutScreen />} />
        <Route path="producto/:id" element={<ProductDetailScreen />} />

        <Route
          path="producto"
          element={
            <ProtectedRoute>
              <ProductScreen />
            </ProtectedRoute>
          }
        />

        <Route
          path="admin"
          element={
            user?.rol === "admin"
              ? <AdminScreeen />
              : <Navigate to="/" replace />
          }
        />

      </Route>

    </Routes>
  );
};
export default RoutesPrincipal;
