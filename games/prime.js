import gameEngine, { arrayGenerator, randomNumberFromRange } from '../src/index.js';

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
const gameCondition = `Answer "${positiveAns}" if given number is prime. Otherwise answer "${negativeAns}".`;

const questionFunction = () => randomNumberFromRange(2, 30);

const answerFunction = (i, questions) => {
  if (isPrime(questions[i])) {
    return positiveAns;
  }
  return negativeAns;
};

const primeGame = () => {
  const questions = arrayGenerator(questionFunction);
  const rightAnswers = arrayGenerator(answerFunction, questions);
  gameEngine(questions, rightAnswers, gameCondition);
};

export default primeGame;
