import runGameEngine from '../index.js';
import getRandomNumInRange from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const getMathOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumInRange(0, operators.length - 1);
  return operators[randomIndex];
};

const calculateExpression = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Unexpected operator '${operator}'`);
  }
};

const generateRound = () => {
  const firstNum = getRandomNumInRange(1, 25);
  const secondNum = getRandomNumInRange(1, 25);
  const operator = getMathOperator();

  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = calculateExpression(firstNum, secondNum, operator);

  return [question, answer];
};

export default () => {
  runGameEngine(gameDescription, generateRound);
};
