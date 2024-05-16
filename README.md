# JS Practice Coding Challenge Platform

FYI... am new to JavaScript... am new to coding period. I started learning Feb 2024. Haft the time I am lost.
This is a **personal project** after I completed a Frontend track(course) on Hyperskill. A way to practice.
Inspired by Hyperskill way of presenting problems for students to answer.

## Overview
This project is a coding challenge platform designed to help users practice and improve their coding skills. It allows users to solve problems, check their solutions, and learn from hints or solutions provided.

[js-practice.webm](https://github.com/lixoten/JS-Practice-2/assets/52259786/089c46e8-b717-4bff-a73c-bf0f56bf7afa)



## Features
- **Problem Set Management**: Users can load different sets of problems to solve
  --- **<span style="color:red;">Am still working on this</span>**.
- **Code Editor**: An integrated code editor using CodeMirror for writing and editing code.
  --- **<span style="color:red;">need to upgrage to codemirror 6</span>**.
- **Solution Checking**: Users can check their solutions against expected solutions on Submit/Check.
- **Hint System**: Provides hints to help users solve problems, on user request.
- **Score Reward/Penalty History** Display a history of applied points, be it + points awarded or - points for penalties.
- **Solution Display**: Shows the correct solution on user request.
- **Scoring System**: Keeps track of the user's score based on correct and incorrect answers and penalties if solution or hints are used. Or if a problem is skipped
- **Copy to Clipboard**: Users can copy the solution to their clipboard for easy access.

### Problem Files
- **JSON Format**: Problems are stored in JSON files, allowing for easy management and expansion of the problem set.
- **Dynamic Loading**: The application dynamically loads problems from JSON files, providing a flexible way to introduce new problems.

### User Interaction
- **Code Editor**: A CodeMirror-based editor allows users to write and run JavaScript code to solve problem.
- **Problem Display**: Problems are displayed with instructions and hints, guiding users through the solution process.
- **Solution Viewing**: Users can view the correct solution on request. 10 points penalty
- **Hint Viewing**: Users can view hints. Each hint view incurs 1 point penalty
- **Scoring System**: A scoring system rewards correct answers and penalizes incorrect attempts or viewing solutions prematurely.

### Gamification
- **Scoring**: Users earn points for correct answers and lose points for incorrect attempts or viewing solutions.
- **Game Stats**: for tracking how many problems have been solved, how many left to go, how many wrong and so on..
- **Penalties**: Viewing solutions, hints incurs a penalty, Skipping problems are incur penelty. Encouraging users to solve problems independently.
- **Progress Tracking**: The application tracks user progress, displaying scores and penalties to motivate continuous learning.

### Technical Implementation
#### Modularity and Class Usage
- **Classes**: The application uses classes (Scoring and MessageHandler) to encapsulate functionality related to scoring and message handling, promoting modularity and reusability.
- **Modules**: JavaScript modules (main.js, scoring.js, messageHandler.js, etc.) are used to organize code, facilitating easier maintenance and understanding.

### JSON Data Handling
- **Loading Problems**: The loadAndPresentProblems function fetches problems from JSON files, dynamically updating the UI with new problems.
- **Problem Structure**: Each problem includes instructions, a hint, the problem statement, arguments, and the expected solution, structured in a JSON object.


## Getting Started

### Prerequisites
- A modern web browser.
- Basic knowledge of HTML, CSS, and JavaScript.

### Installation

npm install @codemirror/lint

This project is a web-based application and does not require installation. Simply open the `index.html` file in your web browser.
--- **<span style="color:red;">Not really ready for that</span>**.
--- **<span style="color:red;">xxxxxxxxxxxxxx</span>**.

## Usage

1. **Load a Problem Set**: Click the "Change Problem Set" button to load a new set of problems.
2. **Solve Problems**: Use the integrated CodeMirror editor to write your solution and click the "Run Script" button to execute it.
3. **Check Your Solution**: Click the "Check" button to compare your solution with the expected solution.
4. **View Hints and Solutions**: If you're stuck, click the "Show hint" button to get a hint. If you want to see the solution, click the "Show Solution" button.

## Contributing

Contributions are welcome If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or need further assistance, please open an issue or contact the maintainers.
