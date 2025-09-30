import { Navigate } from "react-router-dom";
import { ReactElement } from "react";

interface ProtectedRouteProps {
  children: ReactElement; // ✅ doit être un élément React valide
}

export default function ProtectedRoute({ children }: ProtectedRouteProps): ReactElement {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
