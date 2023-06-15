import { useState, useEffect } from 'react';

const useAuth = () => {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<{} | null>(null);
  const [token, setToken] = useState<string | null>(null);




  useEffect(() => {
    // ==================== Check localStorage for user information and token ====================
    const storedUserInfo = localStorage.getItem('userInfo');
    const storedToken = localStorage.getItem('token');

    if (storedUserInfo && storedToken) {
      setUserInfo(JSON.parse(storedUserInfo));
      setToken(storedToken);
      setIsAuthenticated(true);

    } else {
      setIsAuthenticated(false);
      setUserInfo(null);
      setToken(null);
    }
  }, []);




  const login = (userInfo: any, token: string) => {
    setUserInfo(userInfo);
    setToken(token);
    setIsAuthenticated(true);

    // ==================== Persist user info and token in localStorage ====================
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    localStorage.setItem('token', token);
  };




  const logout = () => {
    setUserInfo(null);
    setToken(null);
    setIsAuthenticated(false);

    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
  };




  return { isAuthenticated, userInfo, token, login, logout };
};

export default useAuth;
