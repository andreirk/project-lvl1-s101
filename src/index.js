const readlineSync = require('readline-sync');

const NUMBER_OF_QUESTIONS = 3;
const MIN = 1;
const MAX = 20;

const operationList = [
  {
    name: 'add',
    sign: '+',
    func: (a, b) => a + b,
  },
  {
    name: 'sub',
    sign: '-',
    func: (a, b) => a - b,
  },
  {
    name: 'mul',
    sign: '*',
    func: (a, b) => a * b,
  },
];

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const brainGames = () => {
  console.log(`
  Welcome to the Brain Games!
  What is the result of the expression?
  `);

  const userName = readlineSync.question('May I have your name? ');
  for (let i = 0; i < NUMBER_OF_QUESTIONS; i += 1) {
    const num1 = getRandomInteger(MIN, MAX);
    const num2 = getRandomInteger(MIN, MAX);
    const numOfOperations = operationList.length;
    const operation = operationList[getRandomInteger(0, numOfOperations)];
    const question = `Question: ${num1} ${operation.sign} ${num2}`;
    console.log(question);
    const correctAnswer = operation.func(num1, num2);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainGames;
