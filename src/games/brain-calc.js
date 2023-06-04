import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const randomOperatorGenerator = () => {
  const arr = ['+', '-', '*'];
  const randomElement = Math.floor(Math.random() * (arr.length));
  const randomOperator = arr[randomElement];
  return randomOperator;
};

const expressionRightAnswer = () => {
  const expression = `${randomNumberGenerator()} ${randomOperatorGenerator()} ${randomNumberGenerator()}`;
  const rightAnswer = eval(expression).toString();
  return [expression, rightAnswer];
};

const rules = 'What is the result of the expression?';

const brainCalc = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainCalc;
