import gameEngine, { numberOfGames, randomNumberFromRange } from '../src/index.js';

const isEven = (number) => number % 2 === 0;
const positiveAns = 'yes';
const negativeAns = 'no';
const gameCondition = `Answer "${positiveAns}" if the number is even, otherwise answer "${negativeAns}".`;

const questionsGenerator = () => {
  const questions = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    questions[i] = randomNumberFromRange(1, 100);
  }

  return questions;
};

const answersGenerator = (questions) => {
  const answers = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    if (isEven(questions[i])) {
      answers[i] = positiveAns;
    } else {
      answers[i] = negativeAns;
    }
  }

  return answers;
};

const evenGame = () => {
  const questions = questionsGenerator();
  const rightAnswers = answersGenerator(questions);
  gameEngine(questions, rightAnswers, gameCondition);
};

export default evenGame;
