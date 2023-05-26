#!/usr/bin/env node
import readlineSync from 'readline-sync';

const IsEven = (number) => {
    if (number % 2 === 0) {
        return 'yes';
    }   return 'no';
};

const startGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = Math.random() * 100;
        const roundedRandomNumber = Math.round(randomNumber);
        const verResult = IsEven(roundedRandomNumber);
        console.log(`Question: ${roundedRandomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');
        if (verResult !== userAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${verResult}'.\nLet's try again, ${userName}!`);
            return;
        } console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};

startGame();
