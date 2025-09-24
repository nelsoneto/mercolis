# Mercolis! 📝  
Your smart, simple, and modern shopping list.

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-9.0-orange?logo=firebase)
![MIT License](https://img.shields.io/badge/License-MIT-green)
[![Live Demo](https://img.shields.io/badge/Live-Demo-black?logo=vercel)](https://nelson-portifolio.vercel.app/)

---

## 🚀 About the Project

**Mercolis** is a modern web application designed to simplify how you create and manage your shopping lists. Say goodbye to lost paper scraps and overly complicated apps! With a clean interface, dark mode, and real-time sync, Mercolis makes your grocery runs more efficient and organized.
Honestly, this idea popped into my head every time my wife and I needed to write down our market list. We'd either forget something, lose the note, or end up texting each other random items. So I thought: why not build something that actually solves this for us and maybe for other people too?

> ⚠️ This is an ongoing project, with new features being added regularly.

---

## ✨ Key Features

- 🔒 **User Authentication**: Secure login with Email/Password and Google provider.
- ➕ **List Management**: Create, edit, and delete multiple shopping lists.
- ✔️ **Interactive Items**: Add items, mark them as purchased, and see real-time updates.
- 🌙 **Dark Mode**: Light and dark themes with persistent user preference.
- 📱 **Responsive Design**: Fully optimized for desktops, tablets, and smartphones.
- 🔥 **Real-time Database**: Instant updates across devices using Firebase Firestore.

---

## 📸 Demo

<img width="1287" height="988" alt="image" src="https://github.com/user-attachments/assets/b36e4378-ec26-4a40-87b9-5a289440b082" />
<img width="1287" height="996" alt="image" src="https://github.com/user-attachments/assets/a0085961-6ba5-4aa3-adb2-4a531ec94e08" />

---

## 🛠️ Tech Stack

- **Frontend**: React.js & TypeScript  
- **Build Tool**: Vite.js  
- **Styling**: Tailwind CSS  
- **Backend & Database**: Firebase (Authentication & Firestore)  
- **Routing**: React Router DOM  
- **State Management**: React Context API  
- **Linting**: ESLint  

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- A Firebase account

### Installation

```bash
git clone https://github.com/nelsoneto/mercolis.git
cd mercolis
npm install
```
## Configuration

Create a .env file at the root of the project and add your Firebase credentials:
```.env
VITE_API_KEY="AIza..."
VITE_AUTH_DOMAIN="your-project.firebaseapp.com"
VITE_PROJECT_ID="your-project"
VITE_STORAGE_BUCKET="your-project.appspot.com"
VITE_MESSAGING_SENDER_ID="..."
VITE_APP_ID="1:..."
```

## 🛣️ Roadmap
- [x] Google Authentication
- [x] Dark mode with persistence
- [x] List CRUD operations
- [ ] Share lists with other users
- [ ] Push notifications
- [ ] Purchase history tracking

## 🤝 Contributing
Contributions are welcome! Feel free to open issues, submit pull requests, or suggest improvements.
