import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import LoginScreen from "../views/LoginScreen";
import HomeScreen from "../views/HomeScreen";
import RegisterScreen from "../views/RegisterScreen";
import AdminScreen from "../views/AdminScreeen";

const RoutesPrincipal = () => {
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route
        index
        element={
          user?.rol === "admin" ? (
            <Navigate to="/admin" replace />
          ) : (
            <HomeScreen />
          )
        }
      />

      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />

      <Route
        path="admin"
        element={
          user?.rol === "admin" ? <AdminScreen /> : <Navigate to="/" replace />
        }
      />
    </Routes>
  );
};

export default RoutesPrincipal;
