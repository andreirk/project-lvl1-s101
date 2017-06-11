import Game from '..';

// const mainQuestion = ' What is the result of the expression?';

const MIN = 1;
const MAX = 20;

// const operationList = [
//   {
//     name: 'add',
//     sign: '+',
//     func: (a, b) => a + b,
//   },
//   {
//     name: 'sub',
//     sign: '-',
//     func: (a, b) => a - b,
//   },
//   {
//     name: 'mul',
//     sign: '*',
//     func: (a, b) => a * b,
//   },
// ];

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// const calcGame = () => {
//   const game = {};

//   const numOfOperations = operationList.length;
//   const num1 = getRandomInteger(MIN, MAX);
//   const num2 = getRandomInteger(MIN, MAX);
//   const operation = operationList[getRandomInteger(0, numOfOperations)];
//   const question = {
//     correctAnswer: operation.func(num1, num2),
//     questionText: `${num1} ${operation.sign} ${num2}`,
//   };

//   game.getMainQuestion = () => mainQuestion;

//   game.getQuestion = () => question.questionText;

//   return game;
// };

// export default calcGame;

class CalcQuestion {
  constructor() {
    this.minValue = 1;
    this.maxValue = 20;
  }

  // getMainTask() {
  //   return this.mainTask;
  // }

  // toString() {
  //   return this.questionText;
  // }
  a = '';
  getA = () => {
    return this.a;
  }
  // mainTask = ' What is the result of the expression?'
  // operationList = [
  //   {
  //     name: 'add',
  //     sign: '+',
  //     func: (a, b) => a + b,
  //   },
  //   {
  //     name: 'sub',
  //     sign: '-',
  //     func: (a, b) => a - b,
  //   },
  //   {
  //     name: 'mul',
  //     sign: '*',
  //     func: (a, b) => a * b,
  //   },
  // ];

  // numOfOperations = this.operationList.length;
  // num1 = getRandomInteger(this.minValue, this.maxValue);
  // num2 = getRandomInteger(this.minValue, this.maxValue);
  // operation = this.operationList[getRandomInteger(0, this.numOfOperations)];

  // correctAnswer = this.operation.func(this.num1, this.num2);
  // questionText =`${this.num1} ${this.operation.sign} ${this.num2}`;

}

class CalcGame extends Game {
  constructor(Question) {
    super();
    this.Question = Question;
  }
}

export { CalcQuestion, CalcGame };
