// Генератор случайных чисел (от 0 до 100)

const randomNumberGenerator = () => {
  const randomNumber = Math.random() * 100;
  const roundedRandomNumber = Math.round(randomNumber);
  return roundedRandomNumber;
};

const ifSimple = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export { randomNumberGenerator, ifSimple };
