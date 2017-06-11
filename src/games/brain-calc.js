import gameBegin from '..';
import getRandomInteger from '../randomInt';

const MIN = 1;
const MAX = 20;

const gameDescription = 'What is the result of the expression?';

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


const gameQuestion = () => {
  const num1 = getRandomInteger(MIN, MAX);
  const num2 = getRandomInteger(MIN, MAX);
  const numOfOperations = operationList.length;
  const operation = operationList[getRandomInteger(0, numOfOperations)];

  const correctAnswer = operation.func(num1, num2);
  const questionData = {
    questionText: ` ${num1} ${operation.sign} ${num2}`,
    correctAnswer: String(correctAnswer),
  };

  return questionData;
};

const brainCalc = () => gameBegin(gameDescription, gameQuestion);

export default brainCalc;
