const randomNumberGenerator = (min, max) => {
  const randomNumber = Math.random() * (max - min) + min;
  const roundedRandomNumber = Math.round(randomNumber);
  return roundedRandomNumber;
};

export default randomNumberGenerator;
