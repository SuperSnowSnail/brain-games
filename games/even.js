import gameEngine, { arrayGenerator, randomNumberFromRange } from '../src/index.js';

const isEven = (number) => number % 2 === 0;
const positiveAns = 'yes';
const negativeAns = 'no';
const gameCondition = `Answer "${positiveAns}" if the number is even, otherwise answer "${negativeAns}".`;

const questionFunction = () => randomNumberFromRange(1, 100);

const answerFunction = (i, questions) => {
  if (isEven(questions[i])) {
    return 'yes';
  }
  return 'no';
};

const evenGame = () => {
  const questions = arrayGenerator(questionFunction);
  const rightAnswers = arrayGenerator(answerFunction, questions);
  gameEngine(questions, rightAnswers, gameCondition);
};

export default evenGame;
