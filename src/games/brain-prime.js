import launchGames from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getExpressionRightAnswer = () => {
  const expression = `${getRandomNumber(0, 100)}`;
  const rightAnswer = isPrime(expression) ? 'yes' : 'no';
  return [expression, rightAnswer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  launchGames(rules, getExpressionRightAnswer);
};

export default brainPrime;
