import readlineSync from 'readline-sync';

export const numberOfGames = 3;

export const numberGenerator = () => {
  const minNumber = 1;
  const maxNumber = 20;
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
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
