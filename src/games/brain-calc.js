import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const calculateExpression = (operand1, operand2, operator) => {
  let rightAnswer;
  switch (operator) {
    case '+':
      rightAnswer = (operand1 + operand2).toString();
      break;
    case '-':
      rightAnswer = (operand1 - operand2).toString();
      break;
    default:
      rightAnswer = (operand1 * operand2).toString();
  }
  return rightAnswer;
};

const expressionRightAnswer = () => {
  const arr = ['+', '-', '*'];
  const randomElement = Math.floor(Math.random() * (arr.length));
  const operator = arr[randomElement];
  const operand1 = randomNumberGenerator(0, 20);
  const operand2 = randomNumberGenerator(0, 20);
  const expression = `${operand1} ${operator} ${operand2}`;
  const rightAnswer = calculateExpression(operand1, operand2, operator);
  return [expression, rightAnswer];
};

const rules = 'What is the result of the expression?';

const brainCalc = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainCalc;
