import launchGames from '../index.js';
import getRandomNumber from '../utils.js';

const findGcd = (number1, number2) => {
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

const getRoundData = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const numbers = `${number1} ${number2}`;
  const rightAnswer = findGcd(number1, number2).toString();
  return [numbers, rightAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  launchGames(rules, getRoundData);
};

export default brainGcd;
