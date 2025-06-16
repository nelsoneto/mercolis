import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; // Nosso hook customizado

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, isLoading } = useAuth();

  // 1. Enquanto o Firebase verifica a autenticação, mostramos uma tela de loading
  //    Isso evita um "piscar" para a tela de login antes de confirmar o usuário.
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Carregando...</p> {/* Pode ser um componente de Spinner */}
      </div>
    );
  }

  // 2. Se o carregamento terminou e NÃO HÁ usuário, redirecionamos para o login.
  //    O `Navigate` do react-router-dom faz o redirecionamento.
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // 3. Se há um usuário, permitimos o acesso e renderizamos a página filha.
  return <>{children}</>;
};

export default ProtectedRoute;