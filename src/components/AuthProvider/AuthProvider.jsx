import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOutUser } from "../../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const logout = async () => {
    setLoading(true);
    await signOutUser();
    setIsAuthenticated(false);
    setLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, currentUser, loading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
