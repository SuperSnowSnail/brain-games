import readlineSync from 'readline-sync';

const numberOfGames = 3;

export const randomNumberFromRange = (min, max) => Math.round(Math.random() * (max - min) + min);

export const arrayGenerator = (coreFunction, additionalParam) => {
  const result = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    result.push(coreFunction(i, additionalParam));
  }

  return result;
};

const gameEngine = (questions, rightAnswers, gameCondition) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameCondition);

  for (let i = 0; i < numberOfGames; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswers[i]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswers[i]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
