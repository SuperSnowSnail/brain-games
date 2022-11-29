import gameEngine from '../index.js';
import { arrayGenerator, randomNumberFromRange } from '../utils.js';

const gameCondition = 'What is the result of the expression?';

const mathSymbolGenerator = () => {
  const numberOfOptions = 3;
  const symbols = ['+', '-', '*'];
  const randomSymbolIndex = Math.floor(Math.random() * numberOfOptions);
  return symbols[randomSymbolIndex];
};

const questionFunction = () => {
  let firstNumber = 0;
  let secondNumber = 0;
  const mathSymbol = mathSymbolGenerator();
  if (mathSymbol === '*') {
    firstNumber = randomNumberFromRange(1, 12);
    secondNumber = randomNumberFromRange(1, 12);
  } else {
    firstNumber = randomNumberFromRange(1, 100);
    secondNumber = randomNumberFromRange(1, 100);
  }
  const questionArray = [firstNumber, mathSymbol, secondNumber];

  return questionArray.join(' ');
};

const answerFunction = (i, questions) => {
  const question = questions[i].split(' ');
  const firstNumber = Number(question[0]);
  const secondNumber = Number(question[2]);
  const mathSymbol = question[1];
  switch (mathSymbol) {
    case '+':
      return String(firstNumber + secondNumber);
    case '-':
      return String(firstNumber - secondNumber);
    case '*':
      return String(firstNumber * secondNumber);
    default:
      return 'Unexpected Value!';
  }
};

const calcGame = () => {
  const questions = arrayGenerator(questionFunction);
  const rightAnswers = arrayGenerator(answerFunction, questions);
  gameEngine(questions, rightAnswers, gameCondition);
};

export default calcGame;
