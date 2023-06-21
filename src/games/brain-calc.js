import launchGames from '../index.js';
import getRandomNumber from '../utils.js';

const calculateExpression = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return (operand1 + operand2).toString();
    case '-':
      return (operand1 - operand2).toString();
    case '*':
      return (operand1 * operand2).toString();
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getExpressionRightAnswer = () => {
  const arr = ['+', '-', '*'];
  const randomElement = getRandomNumber(0, arr.length - 1);
  const operator = arr[randomElement];
  const operand1 = getRandomNumber(0, 20);
  const operand2 = getRandomNumber(0, 20);
  const expression = `${operand1} ${operator} ${operand2}`;
  const rightAnswer = calculateExpression(operand1, operand2, operator);
  return [expression, rightAnswer];
};

const rules = 'What is the result of the expression?';

const brainCalc = () => {
  launchGames(rules, getExpressionRightAnswer);
};

export default brainCalc;
