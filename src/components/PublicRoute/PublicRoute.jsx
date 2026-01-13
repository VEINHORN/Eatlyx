import { Navigate, Outlet } from "react-router";
import { useAuth } from "../AuthProvider/AuthProvider";

export const PublicRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return null;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
