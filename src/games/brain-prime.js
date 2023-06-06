import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const expressionRightAnswer = () => {
  const expression = `${randomNumberGenerator()}`;
  let result;
  if (expression < 2) {
    result = 'no';
    return [expression, result];
  }
  for (let i = 2; i <= expression / 2; i += 1) {
    if (expression % i === 0) {
      result = 'no';
      return [expression, result];
    }
  }
  result = 'yes';
  return [expression, result];
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainPrime;
