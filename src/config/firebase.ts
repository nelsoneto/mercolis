import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// As variáveis de ambiente são prefixadas com VITE_ em projetos Vite
const firebaseConfig = {
  apiKey: "AIzaSyDrmkBjIWRtIrxxJRD5p4Qnc9aXQfVy2Rg",
  authDomain: "mercolis---lista-de-mercado.firebaseapp.com",
  projectId: "mercolis---lista-de-mercado",
  storageBucket: "mercolis---lista-de-mercado.firebasestorage.app",
  messagingSenderId: "39375925613",
  appId: "1:39375925613:web:716273e514d4c77f7aea64",
  measurementId: "G-TME352W0FH"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços que serão utilizados na aplicação
export const auth = getAuth(app);
export const db = getFirestore(app);