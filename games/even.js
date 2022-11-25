// import readlineSync from 'readline-sync';
import gameEngine, { numberOfGames, numberGenerator } from '../src/index.js';

const isEven = (number) => number % 2 === 0;
const positiveAns = 'yes';
const negativeAns = 'no';
const gameCondition = `Answer "${positiveAns}" if the number is even, otherwise answer "${negativeAns}".`;

const questionsGenerator = () => {
  const questions = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    questions[i] = numberGenerator();
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

// import number of games from index.js
// generating questions array and right answers array with length of number of games
/*
const numberGenerator = () => {
  const maxNumber = 100;
  return Math.floor(Math.random() * maxNumber);
};

const isEven = (number) => number % 2 === 0;

const failMessage = (rightAns, wrongAns, userName) => {
  console.log(`'${wrongAns}' is wrong answer ;(. Correct answer was '${rightAns}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const evenGame = (userName) => {
  const numberOfGames = 3;
  const positiveAns = 'yes';
  const negativeAns = 'no';

  console.log(`Answer "${positiveAns}" if the number is even, otherwise answer "${negativeAns}".`);
  for (let i = 0; i < numberOfGames; i += 1) {
    const randomNumber = numberGenerator();
    let rightAns = '';

    if (isEven(randomNumber)) {
      rightAns = positiveAns;
    } else {
      rightAns = negativeAns;
    }

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAns) {
      failMessage(rightAns, userAnswer, userName);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
*/

export default evenGame;
