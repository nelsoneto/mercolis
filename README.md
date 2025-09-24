# Mercolis! 📝  
A sua lista de compras inteligente, simples e moderna.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-9.0-orange?logo=firebase)
![MIT License](https://img.shields.io/badge/License-MIT-green)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://nelson-portifolio.vercel.app/)

---

## 🚀 Sobre o Projeto

**Mercolis** é uma aplicação web moderna, desenhada para simplificar a forma como você cria e gerencia suas listas de compras. Chega de pedaços de papel perdidos ou apps complicados! Com uma interface limpa, modo escuro e sincronização em tempo real, o Mercolis torna suas idas ao supermercado mais eficientes e organizadas.

> ⚠️ Este é um projeto em andamento, com novas funcionalidades sendo adicionadas continuamente.

---

## ✨ Principais Funcionalidades

- 🔒 **Autenticação de Usuários**: Login seguro com E-mail/Senha e Google.
- ➕ **Gerenciamento de Listas**: Crie, edite e delete múltiplas listas.
- ✔️ **Itens Interativos**: Marque itens como comprados com atualização em tempo real.
- 🌙 **Modo Escuro**: Tema claro/escuro com persistência da preferência.
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e smartphone.
- 🔥 **Real-time Database**: Sincronização instantânea via Firebase Firestore.

---

## 📸 Demonstração

> *(Adicione aqui um GIF ou imagem do app rodando. Posso te ajudar a gerar um se quiser!)*

---

## 🛠️ Stack de Tecnologias

- **Frontend**: React.js & TypeScript  
- **Build Tool**: Vite.js  
- **Estilização**: Tailwind CSS  
- **Backend & Database**: Firebase (Authentication & Firestore)  
- **Roteamento**: React Router DOM  
- **Gerenciamento de Estado**: React Context API  
- **Linting**: ESLint  

---

## ⚙️ Como Começar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Conta no Firebase

### Instalação

```bash
git clone https://github.com/nelsoneto/mercolis.git
cd mercolis
npm install

Crie um arquivo .env na raiz do projeto com as credenciais do Firebase:

VITE_API_KEY="AIza..."
VITE_AUTH_DOMAIN="seu-projeto.firebaseapp.com"
VITE_PROJECT_ID="seu-projeto"
VITE_STORAGE_BUCKET="seu-projeto.appspot.com"
VITE_MESSAGING_SENDER_ID="..."
VITE_APP_ID="1:..."

