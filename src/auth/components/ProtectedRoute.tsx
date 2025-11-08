import { useAuthStore } from "../store/auth.store";
import { Navigate } from "react-router";

export const ProtectedAuthRoute = ({ children }: { children: React.ReactNode }) => {
  const authStatus = useAuthStore((store) => store.authStatus);

  if (authStatus === "checking") return <div>Loading...</div>;

  if (authStatus === "authenticated") return <Navigate to="/notes" />;

  return children;
};
