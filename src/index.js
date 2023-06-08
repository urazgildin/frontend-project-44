import readlineSync from 'readline-sync';

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
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
};

// Поздравления

const congratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const gamesEngine = (rules, expressionRightAnswer) => {
  const userName = greeting();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const getExpressionRightAnswer = expressionRightAnswer();
    const expression = getExpressionRightAnswer[0];
    const rightAnswer = getExpressionRightAnswer[1];
    const userAnswer = askQuestionGetAnswer(expression);
    if (rightAnswer !== userAnswer) {
      printYouLose(userAnswer, rightAnswer, userName);
      return;
    } console.log('Correct!');
  }
  congratulations(userName);
};

export default gamesEngine;
