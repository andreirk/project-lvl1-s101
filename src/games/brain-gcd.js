import gameBegin from '..';
import getRandomInteger from '../randomInt';

const MIN = 1;
const MAX = 20;

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
};

const gameQuestion = () => {
  const num1 = getRandomInteger(MIN, MAX);
  const multiplier = getRandomInteger(2, 5);
  const num2 = getRandomInteger(MIN, MAX) * multiplier;

  const correctAnswer = gcd(num1, num2);
  const questionData = {
    questionText: ` ${num1}  ${num2}`,
    correctAnswer: String(correctAnswer),
  };

  return questionData;
};

const brainGcd = () => gameBegin(gameDescription, gameQuestion);

export default brainGcd;
