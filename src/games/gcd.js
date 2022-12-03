import runGameEngine from '../index.js';
import getRandomNumInRange from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  while (firstNum !== secondNum) {
    if (firstNum > secondNum) {
      firstNum -= secondNum;
    } else {
      secondNum -= firstNum;
    }
  }

  return firstNum;
};

const generateRound = () => {
  const firstNum = getRandomNumInRange(1, 20);
  const secondNum = getRandomNumInRange(1, 20);

  const question = `${firstNum} ${secondNum}`;
  const answer = calculateGcd(firstNum, secondNum);

  return [question, answer];
};

export default () => {
  runGameEngine(gameDescription, generateRound);
};
