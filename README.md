# React Utility Hub (LinguaLab)

**Theme:** Text Intelligence Toolkit  
A single-page React application providing text-based utilities including a language translator and a random string generator. Built to demonstrate advanced React concepts, client-side routing, and modern UI design.

![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan)

## 🚀 Features

### 🌐 Text Translator

- **Frequency Translation:** Convert text between multiple languages using the Google Translate API (via RapidAPI).
- **Auto-Detection:** Automatically detects source language.
- **History:** Saves your recent translations locally.

### 🔢 String Generator

- **Secure Tokens:** Generate random strings for passwords or API keys.
- **Customizable:** Toggle uppercase, lowercase, numbers, and special characters.
- **History:** Keeps track of recently generated strings.

### ⚡ Technical Highlights

- **Client-Side Routing:** seamless navigation with `react-router-dom`.
- **Custom Hooks:** Logic abstraction (e.g., `useRandomString`).
- **Glassmorphism UI:** Modern, responsive design using Tailwind CSS.

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS, Framer Motion
- **Routing:** React Router DOM v6
- **API:** Axiios, RapidAPI (Google Translate)
- **Icons:** Lucide React

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Architrb1795/React-Utility-Hub.git
cd React-Utility-Hub
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your RapidAPI credentials:

```env
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
VITE_RAPIDAPI_HOST=google-translate113.p.rapidapi.com
```

> **Note:** Without an API key, the app runs in **Simulation Mode** (mock data).

### 4. Run Locally

```bash
npm run dev
```

## 📂 Project Structure

```
src/
 ├─ components/   # Reusable UI components (Navbar, InputPanel, etc.)
 ├─ pages/        # Route components (Home, Translator, Generator)
 ├─ hooks/        # Custom hooks logic
 ├─ routes/       # Routing configuration
 └─ utils/        # Helper functions and constants
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Developed by **Archit** | QSkill Internship Project
