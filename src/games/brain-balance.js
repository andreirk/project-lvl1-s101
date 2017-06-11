import gameBegin from '..';
import getRandomInteger from '../randomInt';

const MIN = 111;
const MAX = 1000;

const mainQuestion = 'Balance the given number.';

const getMax = arr => Math.max.apply(null, arr);
const getMin = arr => Math.max.apply(null, arr);

const getBallancedNum = (num) => {
  const arrOfDigits = Array.from(String(num));
  let maxDigit = getMax(arrOfDigits);
  let minDigit = getMin(arrOfDigits);

  while ((maxDigit - minDigit) > 1) {
    arrOfDigits[0] += 1;
    const lastIndex = arrOfDigits.length - 1;
    arrOfDigits[lastIndex] -= 1;
    maxDigit = getMax(arrOfDigits);
    minDigit = getMin(arrOfDigits);
  }
  return arrOfDigits.join('');
};

const gameQuestion = () => {
  const notBalancedNum = getRandomInteger(MIN, MAX);

  const correctAnswer = getBallancedNum(notBalancedNum);
  const questionData = {
    questionText: ` ${notBalancedNum}`,
    correctAnswer: String(correctAnswer),
  };

  return questionData;
};

const brainBalance = () => gameBegin(mainQuestion, gameQuestion);

export default brainBalance;
