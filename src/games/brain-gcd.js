import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const gcdFinder = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return (a + b);
};

const expressionRightAnswer = () => {
  const number1 = randomNumberGenerator(0, 100);
  const number2 = randomNumberGenerator(0, 100);
  const expression = `${number1} ${number2}`;
  const rightAnswer = gcdFinder(number1, number2).toString();
  return [expression, rightAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainGcd;
