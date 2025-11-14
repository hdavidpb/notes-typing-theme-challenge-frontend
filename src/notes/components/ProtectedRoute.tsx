import { Navigate, useLocation, useNavigate } from "react-router";
import { useAuthStore } from "../../auth/store/auth.store";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const authStatus = useAuthStore((store) => store.authStatus);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (authStatus === "checking") {
    return <div>Loading...</div>;
  }

  if (authStatus === "not-authenticated") {
    return <Navigate to="/auth" />;
  }

  if (pathname === "/") {
    navigate("/notes");
  }

  return children;
};
