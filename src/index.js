import readlineSync from 'readline-sync';

// Генератор случайных чисел (от 0 до 100)

const randomNumberGenerator = () => {
  const randomNumber = Math.random() * 100;
  const roundedRandomNumber = Math.round(randomNumber);
  return roundedRandomNumber;
};

// Генератор случайных операторов (+, -, *)

const randomOperatorGenerator = () => {
  const arr = ['+', '-', '*'];
  const randomElement = Math.floor(Math.random() * (arr.length - 1));
  const randomOperator = arr[randomElement];
  return randomOperator;
};

// Приветсвие

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// Задать вопрос, получить ответ

const askQuestionGetAnswer = (expression) => {
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

// Вывод оповещения о проигрыше

const printYouLose = (userAnswer, rightAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}`);
};

// Поздравления

const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  randomNumberGenerator, randomOperatorGenerator, greeting, askQuestionGetAnswer,
  printYouLose, congratulations,
};
