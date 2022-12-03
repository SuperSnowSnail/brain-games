import runGameEngine from '../index.js';
import getRandomNumInRange from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getCurrentPart = (answer, numInProgression) => {
  if (answer === numInProgression) {
    return '..';
  }

  return `${numInProgression}`;
};

const calculateMissing = (startNum, i, progressionStep) => startNum + i * progressionStep;

const generateRound = () => {
  const progressionLength = getRandomNumInRange(5, 10);
  const missingIndex = getRandomNumInRange(0, progressionLength - 1);
  const progressionStep = getRandomNumInRange(1, 10);
  const startNum = getRandomNumInRange(1, 20);

  const answer = calculateMissing(startNum, missingIndex, progressionStep);
  let question = '';
  let numInProgression = startNum;
  for (let i = 0; i < progressionLength; i += 1) {
    const currentPart = getCurrentPart(answer, numInProgression);
    question = `${question} ${currentPart}`;
    numInProgression += progressionStep;
  }

  question = question.trim();

  return [question, answer];
};

export default () => {
  runGameEngine(gameDescription, generateRound);
};
