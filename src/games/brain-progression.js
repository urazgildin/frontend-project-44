import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const progressionGenerator = () => {
  const firstElement = randomNumberGenerator(0, 100);
  const oneStep = randomNumberGenerator(2, 10);
  const arr = [firstElement];
  for (let i = 0; i < 9; i += 1) {
    const lastOne = arr.at(-1);
    arr.push(lastOne + oneStep);
  }
  return arr;
};

const expressionRightAnswer = () => {
  const arr = progressionGenerator();
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
