import readlineSync from 'readline-sync';

let userName;
const numberOfQuestions = 3;

const beginGame = (mainQuestion, gameLogic) => {
  console.log(`Welcome to the Brain Games! \n${mainQuestion}`);
  userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const questionData = gameLogic();
    const questionText = questionData.questionText;
    const correctAnswer = questionData.correctAnswer;

    const ask = `Question: ${questionText}`;
    console.log(ask);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default beginGame;

