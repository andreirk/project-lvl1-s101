
const readlineSync = require('readline-sync');

let userName;
const NUMBER_OF_QUESTIONS = 3;

const welcome = (mainQuestion) => {
  console.log(`
  Welcome to the Brain Games!
  ${mainQuestion}
  `);

  userName = readlineSync.question('May I have your name? ');
};

const gameBegin = (mainQuestion, gameLogic) => {
  welcome(mainQuestion);

  for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
    const questionData = gameLogic();
    const questionText = questionData.questionText;
    const correctAnswer = questionData.correctAnswer;

    const ask = `Question: ${questionText}`;
    console.log(ask);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameBegin;

