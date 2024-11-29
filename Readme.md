# Rock-Paper-Scissors Game 🎮

A modern and interactive implementation of the classic **Rock-Paper-Scissors** game. Play against the computer, view real-time results, and enjoy a seamless experience with persistent score tracking and a clean user interface.

## 📝 Overview
This project demonstrates a well-structured and feature-rich web-based game, designed to showcase:
- Interactive gameplay mechanics.
- Dynamic updates with JavaScript.
- Persistent data storage using `localStorage`.

Deployed version: [Rock-Paper-Scissors Game](https://rock-paper-scissor03.netlify.app/)

---

## 🚀 Features
- **User Interaction**: 
  - Players choose from Rock, Paper, or Scissors via interactive icons.
- **Real-Time Score Updates**:
  - Tracks scores for both the user and the computer.
- **Outcome Display**:
  - Highlights win, loss, or draw with custom messages and dynamic colors.
- **Score Persistence**:
  - Scores are saved locally, ensuring continuity even after refreshing the page.
- **Reset Functionality**:
  - A "Clear History" button allows players to reset their scores for a fresh start.

---

## 🛠️ Technologies Used
- **HTML**: Provides the structure for the game interface.
- **CSS**: Enhances the game with a visually appealing design.
- **JavaScript**: Powers the game logic, interactivity, and local storage management.

---

## 🎯 How It Works
1. **Game Logic**:
   - Users select a choice: Rock, Paper, or Scissors.
   - The computer makes a random choice.
   - The winner is determined based on standard game rules:
     - Rock beats Scissors.
     - Paper beats Rock.
     - Scissors beat Paper.
   - A dynamic message displays the result along with the choices made.

2. **Score Management**:
   - Scores for both the user and the computer are updated in real-time.
   - Scores are stored in `localStorage` to ensure persistence.

3. **Reset Functionality**:
   - The "Clear History" button clears stored scores and resets the game.

## Installation

To run the Rock Paper Scissor locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/shivlalsharma/rock-paper-scissor.git
    cd rock-paper-scissor
    ```

2. Open the `index.html` file in your browser.

   Alternatively, you can set up a local server (e.g., using **VS Code Live Server**) to view the game in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.