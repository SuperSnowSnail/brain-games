import runGameEngine from '../index.js';
import getRandomNumInRange from '../utils.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
const positiveAns = 'yes';
const negativeAns = 'no';
const gameDescription = `Answer "${positiveAns}" if given number is prime. Otherwise answer "${negativeAns}".`;

const getAnswerWord = (number) => {
  if (isPrime(number)) {
    return positiveAns;
  }
  return negativeAns;
};

const generateRound = () => {
  const number = getRandomNumInRange(2, 30);
  const question = `${number}`;
  const answer = getAnswerWord(number);

  return [question, answer];
};

export default () => {
  runGameEngine(gameDescription, generateRound);
};
