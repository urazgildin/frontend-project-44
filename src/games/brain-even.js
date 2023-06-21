import launchGames from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getExpressionRightAnswer = () => {
  const expression = `${getRandomNumber(0, 100)}`;
  const rightAnswer = isEven(expression) ? 'yes' : 'no';
  return [expression, rightAnswer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  launchGames(rules, getExpressionRightAnswer);
};

export default brainEven;
