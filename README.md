# Getting Started
📟 Assembly: Endgame

Assembly: Endgame is an engaging and interactive word-guessing game built with React. Players attempt to guess the correct programming language word within 8 attempts while keeping the programming world safe from Assembly! The game integrates fun animations, keyboard interactions, accessibility improvements, and more to deliver an enjoyable user experience.

🚀 Features

✅ Random word selection from a list of popular programming languages
✅ Guessing game with visual feedback for correct and wrong guesses
✅ Confetti animation celebration when the user wins
✅ Accessibility improvements using aria-live and role="status"
✅ Dynamic keyboard disabling when the game ends
✅ Reset functionality to start a new game
✅ Farewell messages for incorrectly guessed languages
✅ Clean and responsive UI with styled buttons and status sections

📸 Screenshots

<img width="705" height="784" alt="image" src="https://github.com/user-attachments/assets/fa1f42a5-aeda-4b21-8aa4-5103fac236d6" />

<img width="626" height="736" alt="image" src="https://github.com/user-attachments/assets/91920856-bc55-405e-9654-6aa38b660053" />

<img width="574" height="694" alt="image" src="https://github.com/user-attachments/assets/6573dc39-74f1-4d87-be86-064a72e78879" />

<img width="608" height="721" alt="image" src="https://github.com/user-attachments/assets/3e36e06b-24ae-4a1b-a727-a42f17494960" />






(Note: Replace the placeholder image paths with actual paths to your screenshots.)

📦 Tech Stack

React.js – For building the interactive UI

Vite – For fast development and build tooling

clsx – For conditional class names in JSX

react-confetti – For confetti animations

JavaScript (ES6+) – For logic and interaction handling

CSS – For styling the game layout

Accessibility Best Practices – Using aria-live, role, and screen-reader-friendly sections

⚙ Installation

Clone the repository:

git clone https://github.com/yourusername/assembly-endgame.git
cd assembly-endgame


Install dependencies:

npm install --legacy-peer-deps


Start the development server:

npm run dev


Open the browser at the displayed URL (usually http://localhost:5173).

📁 Project Structure
assembly-endgame/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.js
│   ├── languages.js
│   ├── utils.js
│   ├── words.js
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js

🔧 How to Play

A random word is selected from a predefined list of programming languages.

Click on the letters on the keyboard to guess the word.

Correct guesses are revealed in the word section.

Incorrect guesses show farewell messages and progressively mark languages as "lost".

The game ends when:

All letters are correctly guessed ✅

The number of wrong guesses reaches the maximum allowed ❌

Click "New Game" to reset and start over.

✅ Accessibility Improvements

aria-live="polite": Ensures screen readers announce status updates without interrupting the user's interaction flow.

role="status": Provides context for dynamically updating sections.

Screen-reader-only sections: Offers additional game information in a format accessible to users relying on assistive technology.

📦 Dependencies

react

react-dom

react-confetti

clsx

vite

📂 Available Scripts

npm run dev – Starts the development server

npm run build – Builds the app for production

npm run preview – Preview the production build locally

🤝 Contribution

Contributions are welcome! Feel free to open issues or submit pull requests to improve the game, add features, or fix bugs.

📄 License

This project is licensed under the MIT License.
