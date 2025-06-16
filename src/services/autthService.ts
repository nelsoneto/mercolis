import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword, // Adicionado para um futuro registro
} from 'firebase/auth';
import { auth } from '../config/firebase'; // Nossa instância do Firebase Auth

// Provedor de autenticação do Google
const googleProvider = new GoogleAuthProvider();

/**
 * Realiza o login de um usuário com e-mail e senha.
 * @param email - O e-mail do usuário.
 * @param password - A senha do usuário.
 * @returns A promessa com as credenciais do usuário.
 */
export interface LoginWithEmailParams {
  email: string;
  password: string;
}

export interface AuthResult {
  user: import('firebase/auth').User;
  // Add more fields if needed from UserCredential
}

export const loginWithEmail = (
  email: string,
  password: string
): Promise<import('firebase/auth').UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Realiza o login ou registro de um usuário com a conta do Google.
 * @returns A promessa com as credenciais do usuário.
 */
export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

/**
 * Registra um novo usuário com e-mail e senha.
 * @param email - O e-mail do usuário.
 * @param password - A senha do usuário.
 * @returns A promessa com as credenciais do usuário.
 */
export interface SignUpWithEmailParams {
  email: string;
  password: string;
}

export const signUpWithEmail = (
  email: string,
  password: string
): Promise<import('firebase/auth').UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Realiza o logout do usuário atual.
 */
export const logout = () => {
  return auth.signOut();
};
