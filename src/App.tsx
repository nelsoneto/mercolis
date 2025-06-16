import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.tsx';
import LoginPage from './pages/Login.tsx';
import ProtectedRoute from './components/auth/ProtectedRoute.tsx'; // Importamos o "segurança"

function App() {
  return (
    <Routes>
      {/* ROTA PÚBLICA: /login
        Qualquer um pode acessar a página de login.
        Não precisa de proteção.
      */}
      <Route path="/login" element={<LoginPage />} />

      {/* ROTA PRIVADA: /
        Apenas usuários logados podem acessar a página inicial.
        Envolvemos a <HomePage /> com o nosso <ProtectedRoute>.
      */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      {/* Para outras rotas protegidas, o padrão é o mesmo. Ex:
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        /> 
      */}
    </Routes>
  );
}

export default App;