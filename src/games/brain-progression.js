import launchGames from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = () => {
  const firstElement = getRandomNumber(0, 100);
  const oneStep = getRandomNumber(2, 10);
  const arr = [firstElement];
  for (let i = 0; i < 9; i += 1) {
    const lastOne = arr.at(-1);
    arr.push(lastOne + oneStep);
  }
  return arr;
};

const getExpressionRightAnswer = () => {
  const arr = generateProgression();
  const randomElement = Math.floor(Math.random() * (arr.length));
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
