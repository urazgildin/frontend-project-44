import gamesEngine from '../index.js';
import randomNumberGenerator from '../utils.js';

const randomOperatorGenerator = () => {
  const arr = ['+', '-', '*'];
  const randomElement = Math.floor(Math.random() * (arr.length));
  const randomOperator = arr[randomElement];
  return randomOperator;
};

const expressionRightAnswer = () => {
  const arr = [randomNumberGenerator(), randomOperatorGenerator(), randomNumberGenerator()];
  const operand1 = arr[0];
  const operand2 = arr[2];
  const operator = arr[1];
  const expression = `${arr[0]} ${arr[1]} ${arr[2]}`;
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
  return [expression, rightAnswer];
};

const rules = 'What is the result of the expression?';

const brainCalc = () => {
  gamesEngine(rules, expressionRightAnswer);
};

export default brainCalc;
