import runGameEngine from '../index.js';
import getRandomNumInRange from '../utils.js';

const isEven = (number) => number % 2 === 0;
const positiveAns = 'yes';
const negativeAns = 'no';
const gameDescription = `Answer "${positiveAns}" if the number is even, otherwise answer "${negativeAns}".`;

const getEvenAnswer = (number) => {
  if (isEven(number)) {
    return positiveAns;
  }
  return negativeAns;
};

const generateRound = () => {
  const number = getRandomNumInRange(1, 100);
  const question = `${number}`;
  const answer = getEvenAnswer(number);

  return [question, answer];
};

export default () => {
  runGameEngine(gameDescription, generateRound);
};
