import { Navigate, Outlet } from "react-router";

const isAuthenticated = () => {
    return localStorage.getItem("isAuthenticated") === "true";
};

export default function ProtectedRoute() {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
}
