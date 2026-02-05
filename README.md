# LinguaSignal 🌌

**LinguaSignal** is a futuristic, high-fidelity translation interface built with React and Tailwind CSS. It combines advanced translation capabilities with an immersive "Deep Void" sci-fi aesthetic, featuring glassmorphism, holographic accents, and interactive animations.

![LinguaSignal Interface](public/WebScreenshot.png)

## ✨ Features

- **Interstellar UI**: A stunning visual experience with mesh gradients, neon accents, and custom "Rajdhani" typography.
- **Smart Language Intelligence**:
  - **Auto-Detect**: Automatically identifies the source language.
  - **Smart Selector**: Searchable dropdown with over 50 languages and flag icons.
- **Real-Time Translation**: Powered by Google Translate API (via RapidAPI).
- **Simulation Mode**: Included fallback mode that simulates translation (reverses text) if no API key is provided—perfect for testing UI/UX.
- **Advanced Output**:
  - **Matrix Decoding**: Characters cascade into place for a sci-fi decoding effect.
  - **Export Protocol**: Download translations as `.txt` files or copy to clipboard instantly.
- **History Log**: LocalStorage-persisted history panel to track and restore previous transmissions.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/Architrb1795/LinguaSignal-TranslatorApp.git
    cd LinguaSignal-TranslatorApp
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    - Create a `.env` file in the root directory.
    - Add your RapidAPI key (Optional - see Simulation Mode below).

    ```env
    VITE_RAPIDAPI_KEY=your_rapidapi_key_here
    VITE_RAPIDAPI_HOST=google-translate113.p.rapidapi.com
    ```

    > **Note**: You can get a free key from [RapidAPI's Google Translate API](https://rapidapi.com/googlecloud/api/google-translate1).

4.  **Run the Development Server**:

    ```bash
    npm run dev
    ```

5.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎮 Usage

1.  **Input**: Type text into the "Origin Transmission" panel.
2.  **Target**: Select your desired language from the "Target Frequency" dropdown (English is default).
3.  **Translate**: Press `Ctrl + Enter` or click the **INITIATE SEQUENCE** button.
4.  **History**: Click the clock icon on the left to view and restore past translations.

## 🛡️ Security

This project uses a `.env` file to manage sensitive API keys. **Never commit your `.env` file to version control.** A `.gitignore` is included to prevent this.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
