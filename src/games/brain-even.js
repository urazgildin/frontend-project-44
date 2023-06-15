import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const isEven = (number) => number % 2 === 0;

const expressionRightAnswer = () => {
  const expression = `${randomNumberGenerator(0, 100)}`;
  let rightAnswer;
  if (isEven(expression)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  return [expression, rightAnswer];
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainEven;
