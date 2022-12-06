import runGameEngine from '../index.js';
import getRandomNumInRange from '../utils.js';

const isEven = (number) => number % 2 === 0;
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = getRandomNumInRange(1, 100);
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  runGameEngine(gameDescription, generateRound);
};
