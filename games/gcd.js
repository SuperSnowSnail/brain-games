import gameEngine, { arrayGenerator, randomNumberFromRange } from '../src/index.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const questionFunction = () => {
  const firstNumber = randomNumberFromRange(1, 20);
  const secondNumber = randomNumberFromRange(1, 20);
  return `${firstNumber} ${secondNumber}`;
};

const answerFunction = (i, questions) => {
  const question = questions[i].split(' ');
  let firstNumber = Number(question[0]);
  let secondNumber = Number(question[1]);
  while (firstNumber !== secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return String(firstNumber);
};

const gcdGame = () => {
  const questions = arrayGenerator(questionFunction);
  const rightAnswers = arrayGenerator(answerFunction, questions);
  gameEngine(questions, rightAnswers, gameCondition);
};

export default gcdGame;
