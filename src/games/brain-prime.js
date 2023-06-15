import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const expressionRightAnswer = () => {
  const expression = `${randomNumberGenerator(0, 100)}`;
  let rightAnswer;
  if (isPrime(expression)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [expression, rightAnswer];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainPrime;
