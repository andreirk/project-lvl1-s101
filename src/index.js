const readlineSync = require('readline-sync');

const NUMBER_OF_QUESTIONS = 3;
const MIN = 1;
const MAX = 20;

const getListOfQuestions = (numOfQuestions, minValue, maxValue) => {
  const questionsMap = [];
  for (let i = 0; i < numOfQuestions; i += 1) {
    const value = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
    questionsMap.push(value);
  }
  return questionsMap;
};

const brainGames = () => {
  console.log(`
  Welcome to the Brain Games!
  Answer "yes" if number even otherwise answer "no".
  `);

  const userName = readlineSync.question('May I have your name? ');

  const questionsMap = getListOfQuestions(NUMBER_OF_QUESTIONS, MIN, MAX);

  for (const question of questionsMap) {
    console.log('Question: ', question);
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

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


export default brainGames;

