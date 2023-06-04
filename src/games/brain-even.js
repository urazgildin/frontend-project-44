import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const IsEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } return 'no';
};

const expressionRightAnswer = () => {
  const expression = `${randomNumberGenerator()}`;
  const rightAnswer = IsEven(expression);
  return [expression, rightAnswer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainEven;
