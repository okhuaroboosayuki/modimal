import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import { useEffect } from "react";
import { PageLoader } from "./Loaders";

function ProtectedRoutes({ children, allowPasswordRecovery = false }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, isLoading } = useUser();

  const isPasswordRecoveryPage = location.pathname === "/update-password";

  useEffect(() => {
    if (allowPasswordRecovery && isPasswordRecoveryPage) {
      return;
    }

    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [
    allowPasswordRecovery,
    isAuthenticated,
    isPasswordRecoveryPage,
    location,
    navigate,
  ]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (!isAuthenticated) return children;
}

export default ProtectedRoutes;
