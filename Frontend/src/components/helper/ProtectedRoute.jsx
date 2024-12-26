import { Outlet, Navigate } from "react-router-dom";
function ProtectedRoute() {
    const isLoggedIn = window.localStorage.getItem("isLoggedIn");

    return isLoggedIn === "true" ? <Outlet /> : <Navigate to="login" />;
}

export default ProtectedRoute
