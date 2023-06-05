// Генератор случайных чисел (от 0 до 100)

const randomNumberGenerator = () => {
  const randomNumber = Math.random() * 100;
  const roundedRandomNumber = Math.round(randomNumber);
  return roundedRandomNumber;
};

export default randomNumberGenerator;
