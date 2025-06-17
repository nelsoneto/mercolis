Mercolis! 📝
A sua lista de compras inteligente, simples e moderna.
🚀 Sobre o Projeto
Mercolis é uma aplicação web moderna, desenhada para simplificar a forma como você cria e gerencia as suas listas de compras. Chega de pedaços de papel perdidos ou apps complicados! Com uma interface limpa, modo escuro e sincronização em tempo real, o Mercolis torna as suas idas ao supermercado mais eficientes e organizadas.

Este projeto foi construído como um web app completo, utilizando as tecnologias mais recentes do ecossistema React para garantir uma experiência de usuário rápida, responsiva e agradável. 

⚠️ Este é um projeto em andamento, com novas funcionalidades sendo adicionadas continuamente ⚠️

✨ Principais Funcionalidades
🔒 Autenticação de Usuários: Sistema de login seguro com E-mail/Senha e provedor Google.

➕ Gerenciamento de Listas: Crie, edite e delete múltiplas listas de compras.

✔️ Itens Interativos: Adicione itens às listas, marque-os como comprados e veja a atualização em tempo real.

🌙 Modo Escuro: Tema claro e escuro para uma melhor visualização em qualquer ambiente, com persistência da preferência do usuário.

📱 Design Responsivo: Interface totalmente adaptável para uso em desktops, tablets e smartphones.

🔥 Real-time Database: Listas atualizadas instantaneamente entre dispositivos graças ao Firebase Firestore.

🛠️ Stack de Tecnologias
Este projeto foi desenvolvido com as seguintes tecnologias:

Frontend: React.js & TypeScript

Build Tool: Vite.js

Estilização: Tailwind CSS

Backend & Database: Firebase (Authentication & Firestore)

Roteamento: React Router DOM

Gerenciamento de Estado: React Context API

Linting: ESLint

⚙️ Como Começar
Para rodar este projeto localmente, siga os passos abaixo.

Pré-requisitos
Você precisa ter o Node.js (versão 18 ou superior) e o npm instalados na sua máquina.

Uma conta no Firebase para configurar o backend.

Instalação
Clone o repositório:

git clone https://github.com/nelsoneto/mercolis.git
cd mercolis

Instale as dependências do projeto:

npm install

Configure as variáveis de ambiente:

Crie um arquivo chamado .env na raiz do projeto.

Vá ao console do seu projeto Firebase, acesse as configurações do projeto (Project Settings) e copie as credenciais do seu "Web app".

Cole as credenciais no arquivo .env seguindo o formato abaixo:

# Firebase
VITE_API_KEY="AIza..."
VITE_AUTH_DOMAIN="seu-projeto.firebaseapp.com"
VITE_PROJECT_ID="seu-projeto"
VITE_STORAGE_BUCKET="seu-projeto.appspot.com"
VITE_MESSAGING_SENDER_ID="..."
VITE_APP_ID="1:..."

Rode a aplicação em modo de desenvolvimento:

npm run dev

A aplicação estará disponível em http://localhost:5173.

📁 Estrutura do Projeto
A estrutura de pastas foi organizada para promover a escalabilidade e a separação de responsabilidades, facilitando a manutenção.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Feito com ❤️ por Nelson.
