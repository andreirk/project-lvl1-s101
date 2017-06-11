
const readlineSync = require('readline-sync');

let userName;
const NUMBER_OF_QUESTIONS = 3;

// const welcome = (mainQuestion) => {
//   console.log(`
//   Welcome to the Brain Games!
//   ${mainQuestion}
//   `);

//   userName = readlineSync.question('May I have your name? ');
// };

// const gameBegin = (game) => {
//   const mainQuestion = game.getMainQuestion();
//   welcome(mainQuestion);
//   for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
//     const question = game.getQuestion();
//     const correctAnswer = question.correctAnswer;
//     const ask = `Question: ${question}`;
//     console.log(ask);
//     const answer = readlineSync.question('Your answer: ');
//     console.log({
//       correctAnswer,
//       answer
//     })
//     if (answer === String(correctAnswer)) {
//       console.log('Correct!');
//     } else {
//       console.log(`Let's try again, ${userName}`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${userName}!`);
// };

// export default gameBegin;


class Game {
  constructor(questionClass) {
    this.QuestionClass = questionClass;
  }

  welcome() {
    console.log('Wellcome!', this);
  }

  gameLoop() {
    for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
      const question = new this.QuestionClass();
      const correctAnswer = question.correctAnswer;
      const ask = `Question: ${question}`;
      console.log(ask);
      const answer = readlineSync.question('Your answer: ');
      console.log({
        correctAnswer,
        answer,
      });
      if (answer === String(correctAnswer)) {
        console.log('Correct!');
      } else {
        console.log(`Let's try again, ${userName}`);
        return;
      }
    }
  }

  askName() {
    this.userName = readlineSync.question('May I have your name? ');
  }

  finishGame() {
    console.log(`Congratulations, ${this.userName}!`);
  }

  run() {
    this.welcome();
    this.askName();
    this.gameLoop();
    this.finishGame();
  }

}

export default Game;
