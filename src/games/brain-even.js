const readlineSync = require('readline-sync');

const NUMBER_OF_QUESTIONS = 3;
const MIN = 1;
const MAX = 20;

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const isEven = num => num % 2 === 0;

const brainGames = () => {
  console.log(`
  Welcome to the Brain Games!
  Answer "yes" if number even otherwise answer "no".
  `);

  const userName = readlineSync.question('May I have your name? ');
  for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
    const question = getRandomInteger(MIN, MAX);
    console.log('Question: ', question);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

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
