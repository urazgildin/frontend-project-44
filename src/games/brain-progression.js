import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const expressionRightAnswer = () => {
  const firstElement = randomNumberGenerator();
  const oneStep = Math.round(Math.random() * 10);
  const arr = [firstElement];
  for (let i = 0; i < 9; i += 1) {
    const lastOne = arr.at(-1);
    arr.push(lastOne + oneStep);
  }
  const randomElement = Math.floor(Math.random() * (arr.length));
  const rightAnswer = arr[randomElement].toString();
  arr[randomElement] = '..';
  const expression = arr.join(' ');
  return [expression, rightAnswer];
};

const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainProgression;
