import gameEngine, { numberOfGames, randomNumberFromRange } from '../src/index.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';

const questionsGenerator = () => {
  const questions = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    const firstNumber = randomNumberFromRange(1, 20);
    const secondNumber = randomNumberFromRange(1, 20);
    questions[i] = `${firstNumber} ${secondNumber}`;
  }

  return questions;
};

const answersGenerator = (questions) => {
  const answers = [];

  for (let i = 0; i < numberOfGames; i += 1) {
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
    answers[i] = String(firstNumber);
  }

  return answers;
};

const gcdGame = () => {
  const questions = questionsGenerator();
  const rightAnswers = answersGenerator(questions);
  gameEngine(questions, rightAnswers, gameCondition);
};

export default gcdGame;
