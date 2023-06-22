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

const getRoundData = () => {
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(2, 10);
  const progression = generateProgression(start, step);
  const randomElement = getRandomNumber(0, progression.length - 1);
  const rightAnswer = progression[randomElement].toString();
  progression[randomElement] = '..';
  const progressionWithGap = progression.join(' ');
  return [progressionWithGap, rightAnswer];
};

const rules = 'What number is missing in the progression?';

const brainProgression = () => {
  launchGames(rules, getRoundData);
};

export default brainProgression;
