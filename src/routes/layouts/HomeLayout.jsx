import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function HomeLayout() {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/users" replace />;
  }

  return <div>{outlet}</div>;
}

export default HomeLayout;
