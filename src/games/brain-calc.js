import launchGames from '../index.js';
import getRandomNumber from '../utils.js';

const calculateExpression = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return (operand1 + operand2);
    case '-':
      return (operand1 - operand2);
    case '*':
      return (operand1 * operand2);
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getRoundData = () => {
  const operators = ['+', '-', '*'];
  const randomElement = getRandomNumber(0, operators.length - 1);
  const operator = operators[randomElement];
  const operand1 = getRandomNumber(0, 20);
  const operand2 = getRandomNumber(0, 20);
  const mathExpression = `${operand1} ${operator} ${operand2}`;
  const rightAnswer = calculateExpression(operand1, operand2, operator).toString();
  return [mathExpression, rightAnswer];
};

const rules = 'What is the result of the expression?';

const runBrainCalc = () => {
  launchGames(rules, getRoundData);
};

export default runBrainCalc;
