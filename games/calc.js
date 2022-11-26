import gameEngine, { numberOfGames, randomNumberFromRange } from '../src/index.js';

const gameCondition = 'What is the result of the expression?';

const mathSymbolGenerator = () => {
  const numberOfOptions = 3;
  const symbols = ['+', '-', '*'];
  const randomSymbolIndex = Math.floor(Math.random() * numberOfOptions);
  return symbols[randomSymbolIndex];
};

const questionsGenerator = () => {
  const questions = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    let firstNumber = 0;
    let secondNumber = 0;
    const mathSymbol = mathSymbolGenerator();
    if (mathSymbol === '*') {
      firstNumber = randomNumberFromRange(1, 12);
      secondNumber = randomNumberFromRange(1, 12);
    } else {
      firstNumber = randomNumberFromRange(1, 100);
      secondNumber = randomNumberFromRange(1, 100);
    }
    const questionArray = [firstNumber, mathSymbol, secondNumber];

    questions[i] = questionArray.join(' ');
  }

  return questions;
};

const answersGenerator = (questions) => {
  const answers = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    const question = questions[i].split(' ');
    const firstNumber = Number(question[0]);
    const secondNumber = Number(question[2]);
    const mathSymbol = question[1];
    switch (mathSymbol) {
      case '+':
        answers[i] = String(firstNumber + secondNumber);
        break;
      case '-':
        answers[i] = String(firstNumber - secondNumber);
        break;
      case '*':
        answers[i] = String(firstNumber * secondNumber);
        break;
      default:
        answers[i] = 'Unexpected Value!';
    }
  }

  return answers;
};

const calcGame = () => {
  const questions = questionsGenerator();
  const rightAnswers = answersGenerator(questions);
  gameEngine(questions, rightAnswers, gameCondition);
};

export default calcGame;
