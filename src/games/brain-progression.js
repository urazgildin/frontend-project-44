import launchGames from '../index.js';
import getRandomNumber from '../utils.js';

const progressionLength = 10;

const generateProgression = (start, step) => {
  const arr = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const element = start + i * step;
    arr.push(element);
  }
  return arr;
};

const getExpressionRightAnswer = () => {
  const arr = generateProgression(getRandomNumber(0, 100), getRandomNumber(2, 10));
  const randomElement = getRandomNumber(0, arr.length - 1);
  const rightAnswer = arr[randomElement].toString();
  arr[randomElement] = '..';
  const expression = arr.join(' ');
  return [expression, rightAnswer];
};

const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  launchGames(rules, getExpressionRightAnswer);
};

export default brainProgression;
