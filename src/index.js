import readlineSync from 'readline-sync';

const gamesEngine = (rules, expressionRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const roundsAmount = 3;
  for (let i = 0; i < roundsAmount; i += 1) {
    const getExpressionRightAnswer = expressionRightAnswer();
    const expression = getExpressionRightAnswer[0];
    const rightAnswer = getExpressionRightAnswer[1];
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gamesEngine;
