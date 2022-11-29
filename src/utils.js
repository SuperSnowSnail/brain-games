import { numberOfGames } from './index.js';

export const randomNumberFromRange = (min, max) => Math.round(Math.random() * (max - min) + min);

export const arrayGenerator = (coreFunction, additionalParam) => {
  const result = [];

  for (let i = 0; i < numberOfGames; i += 1) {
    result.push(coreFunction(i, additionalParam));
  }

  return result;
};
