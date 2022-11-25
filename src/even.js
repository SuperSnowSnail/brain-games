import readlineSync from 'readline-sync';

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

export default evenGame;
