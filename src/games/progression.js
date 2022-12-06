import runGameEngine from '../index.js';
import getRandomNumInRange from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (startNum, progressionStep, progressionLength) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const currentPart = startNum + i * progressionStep;
    progression.push(currentPart);
  }

  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomNumInRange(5, 10);
  const missingIndex = getRandomNumInRange(0, progressionLength - 1);
  const progressionStep = getRandomNumInRange(1, 10);
  const startNum = getRandomNumInRange(1, 20);

  const progression = generateProgression(startNum, progressionStep, progressionLength);
  const answer = progression[missingIndex];
  progression[missingIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  runGameEngine(gameDescription, generateRound);
};
