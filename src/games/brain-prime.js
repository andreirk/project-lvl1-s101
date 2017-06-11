import gameBegin from '..';
import getRandomInteger from '../randomInt';

const MIN = 1;
const MAX = 1000;

const mainTask = 'Is the number prime? Answer "yes" or "no".';

const isPrime = (n) => {
  let divisor = 2;
  while (n > divisor) {
    if (n % divisor === 0) {
      return 'no';
    }
    divisor += 1;
  }
  return 'yes';
};

const gameQuestion = () => {
  const num = getRandomInteger(MIN, MAX);

  const correctAnswer = isPrime(num);
  const questionData = {
    questionText: ` ${num}`,
    correctAnswer,
  };

  return questionData;
};

const brainPrime = () => gameBegin(mainTask, gameQuestion);

export default brainPrime;
