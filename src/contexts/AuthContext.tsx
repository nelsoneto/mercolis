import { createContext, type ReactNode, useEffect, useState } from 'react';
import { type User } from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({ currentUser: null, isLoading: true });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // O onAuthStateChanged do Firebase gerencia o estado do usuário
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return unsubscribe; // Limpa o listener quando o componente desmonta
  }, []);

  const value = { currentUser, isLoading };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
