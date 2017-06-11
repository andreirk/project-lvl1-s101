import gameBegin from '..';
import getRandomInteger from '../randomInt';


const MIN = 1;
const MAX = 20;

const mainQuestion = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const gameLogic = () => {
  const question = getRandomInteger(MIN, MAX);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  const questionData = {
    questionText: String(question),
    correctAnswer,
  };

  return questionData;
};

const brainEven = () => gameBegin(mainQuestion, gameLogic);

export default brainEven;
