import React from 'react';
import { auth } from '../config/firebase'; // Importamos a instância do auth
import { signOut } from 'firebase/auth'; // A função de logout do Firebase

const HomePage: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Após o logout, o listener onAuthStateChanged no AuthContext
      // irá automaticamente atualizar o estado e o ProtectedRoute
      // nos redirecionará para a página de login.
      console.log('Usuário deslogado com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <div className="p-8">
      <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white p-8 shadow-md md:max-w-2xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Minhas Listas</h1>
          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
          >
            Sair
          </button>
        </div>
        <p className="mt-4 text-gray-600">
          Bem-vindo! Aqui você pode gerenciar suas listas de compras.
        </p>
        {/* O conteúdo das listas viria aqui */}
      </div>
    </div>
  );
};

export default HomePage;