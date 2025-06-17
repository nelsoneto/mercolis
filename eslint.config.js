import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tailwindcss from 'eslint-plugin-tailwindcss'; // 1. Adicione esta importação

export default tseslint.config(
  { ignores: ['dist'] },
  
  // 2. Adicione a configuração recomendada do Tailwind aqui
  ...tailwindcss.configs['flat/recommended'], 
  
  // Sua configuração existente
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Você pode opcionalmente ajustar as regras do Tailwind aqui
      'tailwindcss/no-custom-classname': 'off', 
    },
  },
);