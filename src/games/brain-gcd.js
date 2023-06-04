import gamesEngine from '../index.js';
import { randomNumberGenerator, ifSimple } from '../utils.js';

const findDevider = (number1, number2) => {
  const max = Math.max(number1, number2);
  const min = Math.min(number1, number2);
  let result;
  if (min === 0) {
    result = max;
    return result;
  }
  if (max % min === 0) {
    result = min;
    return result;
  }
  if (ifSimple(max) === true || ifSimple(min) === true) {
    result = 1;
    return result;
  }
  for (let i = Math.floor(min / 2); i >= 1; i -= 1) {
    if ((min % i === 0) && (max % i === 0)) {
      result = i;
      break;
    }
  }
  return result;
};

const expressionRightAnswer = () => {
  const arr = [randomNumberGenerator(), randomNumberGenerator()];
  const expression = `${arr[0]} ${arr[1]}`;
  const rightAnswer = findDevider(arr[0], arr[1]).toString();
  return [expression, rightAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainGcd;
