import { createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const AuthContext = createContext();

export function AuthProvider({ children, userData }) {
  const [user, setUser] = useLocalStorage('user', userData);
  const navigate = useNavigate();

  const login = async data => {
    try {
      setUser(data);
      navigate('/dashboard/users', { replace: true });
    } catch (error) {
      // catch error
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/', { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
