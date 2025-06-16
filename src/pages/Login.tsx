import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithEmail, loginWithGoogle } from '../services/autthService';
import { useAuth } from '../hooks/useAuth';
import { ThemeToggleButton } from '../components/ui/ThemeToggleButton';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Se o usuário já estiver logado, redireciona para a página inicial
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);


  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await loginWithEmail(email, password);
      // A navegação será tratada pelo useEffect acima ou pelo ProtectedRoute
    } catch (err: unknown) {
      setError('E-mail ou senha inválidos. Tente novamente.');
      console.error(err);
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
      // A navegação será tratada pelo useEffect acima ou pelo ProtectedRoute
    } catch (err: unknown) {
      setError('Falha ao autenticar com o Google.');
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 font-sans transition-colors duration-300 dark:bg-gray-900">
      <div className='absolute right-4 top-4'>
        <ThemeToggleButton />
      </div>
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-lg">

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Mercolis</h1>
          <p className="text-md mt-2 text-gray-600">A sua lista de compras inteligente.</p>
        </div>

        {/* Formulário de Login com Email */}
        <form className="space-y-6" onSubmit={handleEmailLogin}>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
              placeholder="seu-email@exemplo.com"
            />
            <label htmlFor="email" className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
              Endereço de E-mail
            </label>
          </div>

          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder:text-transparent focus:border-blue-600 focus:outline-none"
              placeholder="Senha"
            />
            <label htmlFor="password" className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
              Senha
            </label>
          </div>

          {error && <p className="text-center text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
            >
              {isLoading ? 'Aguarde...' : 'Entrar'}
            </button>
          </div>
        </form>

        {/* Divisor "OU" */}
        <div className="flex items-center justify-center">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-4 shrink text-sm text-gray-400">OU</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        {/* Botão de Login com Google */}
        <div>
          <button
            onClick={handleGoogleLogin}
            disabled={isLoading}
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:bg-gray-200"
          >
            <img className="mr-2 size-5" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
            <span>Entrar com o Google</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;