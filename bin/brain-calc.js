#!/usr/bin/env node
import {
  randomNumberGenerator, randomOperatorGenerator, greeting, askQuestionGetAnswer,
  printYouLose, congratulations,
} from '../src/index.js';

const brainCalc = () => {
  const userName = greeting();
  for (let i = 0; i < 3; i += 1) {
    const expression = `${randomNumberGenerator()} ${randomOperatorGenerator()} ${randomNumberGenerator()}`;
    const rightAnswer = eval(expression).toString();
    const userAnswer = askQuestionGetAnswer(expression);
    if (rightAnswer !== userAnswer) {
      printYouLose(userAnswer, rightAnswer, userName);
      return;
    } console.log('Correct!');
  }
  congratulations(userName);
};

brainCalc();
