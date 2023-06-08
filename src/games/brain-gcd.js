import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const expressionRightAnswer = () => {
  const arr = [randomNumberGenerator(), randomNumberGenerator()];
  const expression = `${arr[0]} ${arr[1]}`;
  const sortedArr = arr.sort((a, b) => a - b);
  const min = sortedArr[0];
  const max = sortedArr[1];
  let rightAnswer;
  if (min === 0) {
    rightAnswer = max.toString();
    return [expression, rightAnswer];
  }
  while (sortedArr[1] % sortedArr[0] !== 0) {
    const newMin = sortedArr[1] % sortedArr[0];
    const newMax = sortedArr[0];
    sortedArr[1] = newMax;
    sortedArr[0] = newMin;
  }
  rightAnswer = sortedArr[0].toString();
  return [expression, rightAnswer];
};

const rules = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainGcd;
