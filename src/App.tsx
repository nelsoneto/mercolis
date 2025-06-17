import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home.tsx'
import LoginPage from './pages/Login.tsx'
import ListDetailsPage from './pages/ListDetails' // Importar a nova página
import ProtectedRoute from './components/auth/ProtectedRoute.tsx'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      {/* ROTA NOVA PARA OS DETALHES DA LISTA */}
      <Route
        path="/list/:listId" // O caminho com o parâmetro dinâmico
        element={
          <ProtectedRoute>
            <ListDetailsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App