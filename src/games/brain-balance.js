import gameBegin from '..';
import getRandomInteger from '../randomInt';

const MIN = 111;
const MAX = 1000;

const mainQuestion = 'Balance the given number.';

const getBallancedNum = (arr) => {
  const arrOfDigits = arr;
  arrOfDigits.sort();
  const lastIndex = arrOfDigits.length - 1;
  const minDigit = arrOfDigits[0];
  const maxDigit = arrOfDigits[lastIndex];
  if (maxDigit - minDigit > 1) {
    arrOfDigits[0] += 1;
    arrOfDigits[lastIndex] -= 1;
    getBallancedNum(arrOfDigits);
  }
  return arrOfDigits.join('');
};

const gameQuestion = () => {
  const notBalancedNum = getRandomInteger(MIN, MAX);
  const arrOfDigits = String(notBalancedNum).split('').map(el => Number(el));
  const correctAnswer = getBallancedNum(arrOfDigits);
  const questionData = {
    questionText: ` ${notBalancedNum}`,
    correctAnswer: String(correctAnswer),
  };

  return questionData;
};

const brainBalance = () => gameBegin(mainQuestion, gameQuestion);

export default brainBalance;
