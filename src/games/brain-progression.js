import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const randomStepGenerator = () => {
  const randomNumber = Math.random() * 10;
  const roundedRandomNumber = Math.round(randomNumber);
  return roundedRandomNumber;
};

const expressionRightAnswer = () => {
  const firstElement = randomNumberGenerator();
  const oneStep = randomStepGenerator();
  const arr = [firstElement];
  for (let i = 0; i < 9; i += 1) {
    const lastOne = arr.at(-1);
    arr.push(lastOne + oneStep);
  }
  const randomItem = randomStepGenerator() - 1;
  const rightAnswer = arr[randomItem].toString();
  arr[randomItem] = '..';
  const expression = arr.join(' ');
  return [expression, rightAnswer];
};

const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainProgression;
