import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function ProtectedLayout() {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <div>{outlet}</div>;
}

export default ProtectedLayout;
