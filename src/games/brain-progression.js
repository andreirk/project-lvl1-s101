import gameBegin from '..';
import getRandomInteger from '../randomInt';

const lengthOfProgression = 10;

const mainQuestion = 'What number is missing in this progression?';

const getProgression = () => {
  const newArr = [];
  const begin = getRandomInteger(2, 10);
  const step = getRandomInteger(2, 9);
  newArr[0] = begin;
  for (let i = 0; i <= lengthOfProgression; i += 1) {
    newArr[i + 1] = (newArr[i] + step);
  }
  return newArr;
};

const gameQuestion = () => {
  const progression = getProgression();
  const indexOfHiden = getRandomInteger(0, lengthOfProgression - 1);
  const correctAnswer = progression[indexOfHiden];
  progression[indexOfHiden] = '..';

  const questionData = {
    questionText: ` ${progression}`,
    correctAnswer: String(correctAnswer),
  };

  return questionData;
};

const brainProgression = () => gameBegin(mainQuestion, gameQuestion);

export default brainProgression;
