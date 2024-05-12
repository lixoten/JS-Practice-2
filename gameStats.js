// gameStats.js
class GameStats {
    constructor() {
        this.totalProblems = 0;
        this.totalProblemsProcessed = 0;
        this.solvedProblems = 0;
        this.skippedProblems = 0;
        this.incorrectAttempts = 0;
        this.attemptsBeenAdded = false;
        this.solvedBeenAdded = false;
        this.gameOver = false;
    }



    // Define a method within the constructor's scope
    // this._privateMethod = (() => {
    //     console.log('This is a method that is not directly accessible from outside the class.');
    // })();

    checkGameOver() {
        ++this.totalProblemsProcessed;

        if (this.totalProblems === this.totalProblemsProcessed) {
            this.gameOver = true;
        }
    }

    isGameOver() {
        //this.checkGameOver()
        return this.gameOver;
    }

    incrementTotalProblems() {
        this.totalProblems++;
    }

    setTotalProblems(value) {
        this.totalProblems = value;
    }


    incrementSolvedProblems() {
        this.checkGameOver();
        if (this.solvedBeenAdded) {
            return;
        }

        this.solvedProblems++;
        this.solvedBeenAdded = true;
    }

    incrementSkippedProblems() {
        this.checkGameOver();
        if (this.solvedBeenAdded) {
            return;
        }

        this.skippedProblems++;
        this.solvedBeenAdded = true;
    }

    incrementIncorrectAttempts() {
        this.checkGameOver();
        if (this.attemptsBeenAdded) {
            return;
        }
        this.incorrectAttempts++;
        this.attemptsBeenAdded = true;
    }

    roundReset() {
        this.attemptsBeenAdded = false;
        this.solvedBeenAdded = false;
    }


    getTotalProblems() {
        return this.totalProblems;
    }

    getSkippedProblems() {
        return this.skippedProblems;
    }

    getSolvedProblems() {
        return this.solvedProblems;
    }

    getIncorrectAttempts() {
        return this.incorrectAttempts;
    }
}

export default new GameStats();
