import launchGames from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const roundQuestion = getRandomNumber(0, 100);
  const rightAnswer = isEven(roundQuestion) ? 'yes' : 'no';
  return [roundQuestion.toString(), rightAnswer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const runBrainEven = () => {
  launchGames(rules, getRoundData);
};

export default runBrainEven;
