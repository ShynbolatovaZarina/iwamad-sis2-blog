import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
  const { signedIn } = useAuth();
  const location = useLocation();

  if (!signedIn) {
    return <Navigate to="/signin" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
