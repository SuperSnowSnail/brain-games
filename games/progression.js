import gameEngine, { numberOfGames, randomNumberFromRange } from '../src/index.js';

const gameCondition = 'What number is missing in the progression?';
const progressionLengthGenerator = () => {
  const progressionLengths = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    progressionLengths[i] = randomNumberFromRange(5, 10);
  }

  return progressionLengths;
};
const progressionLengths = progressionLengthGenerator();

const missingIndexGenerator = () => {
  const missingIndexes = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    const progressionLength = progressionLengths[i];
    missingIndexes[i] = randomNumberFromRange(0, progressionLength - 1);
  }

  return missingIndexes;
};
const progressionStepGenerator = () => {
  const progressionSteps = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    progressionSteps[i] = randomNumberFromRange(1, 10);
  }

  return progressionSteps;
};
const progressionSteps = progressionStepGenerator();
const missingIndexes = missingIndexGenerator();

const questionsGenerator = () => {
  const questions = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    const progressionStep = progressionSteps[i];
    const missingIndex = missingIndexes[i];
    const progressionLength = progressionLengths[i];
    let numberInProgression = randomNumberFromRange(1, 20);
    let question = '';
    for (let j = 0; j < progressionLength; j += 1) {
      if (j === missingIndex) {
        question = `${question} ..`;
      } else {
        question = `${question} ${numberInProgression}`;
      }

      numberInProgression += progressionStep;
    }
    questions[i] = question.trim();
  }
  return questions;
};

const answersGenerator = (questions) => {
  const answers = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    const question = questions[i].split(' ');
    const progressionStep = progressionSteps[i];
    const missingIndex = missingIndexes[i];
    let answer = 0;
    if (missingIndex === 0) {
      answer = Number(question[1]) - progressionStep;
    } else {
      answer = Number(question[missingIndex - 1]) + progressionStep;
    }
    answers[i] = String(answer);
  }
  return answers;
};

const progressionGame = () => {
  const questions = questionsGenerator();
  const rightAnswers = answersGenerator(questions);
  gameEngine(questions, rightAnswers, gameCondition);
};

export default progressionGame;
