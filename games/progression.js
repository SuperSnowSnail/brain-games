import gameEngine, { arrayGenerator, randomNumberFromRange } from '../src/index.js';

const gameCondition = 'What number is missing in the progression?';

const progressionLengthFunction = () => randomNumberFromRange(5, 10);
const progressionLengths = arrayGenerator(progressionLengthFunction);

const missingIndexFunction = (i) => {
  const progressionLength = progressionLengths[i];
  return randomNumberFromRange(0, progressionLength - 1);
};
const missingIndexes = arrayGenerator(missingIndexFunction);

const progressionStepFunction = () => randomNumberFromRange(1, 10);
const progressionSteps = arrayGenerator(progressionStepFunction);

const questionFunction = (i) => {
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
  return question.trim();
};

const answerFunction = (i, questions) => {
  const question = questions[i].split(' ');
  const progressionStep = progressionSteps[i];
  const missingIndex = missingIndexes[i];
  let answer = 0;
  if (missingIndex === 0) {
    answer = Number(question[1]) - progressionStep;
  } else {
    answer = Number(question[missingIndex - 1]) + progressionStep;
  }
  return String(answer);
};

const progressionGame = () => {
  const questions = arrayGenerator(questionFunction);
  const rightAnswers = arrayGenerator(answerFunction, questions);
  gameEngine(questions, rightAnswers, gameCondition);
};

export default progressionGame;
