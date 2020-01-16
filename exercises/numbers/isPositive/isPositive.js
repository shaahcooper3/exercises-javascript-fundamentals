function isPositive(num) {
  return num > 0;
}

if (require.main === module) {
  console.log('Running sanity checks for isPositive:');

  console.log(isPositive(0) === false);
  console.log(isPositive(1) === true);
  console.log(isPositive(-1) === false);
  console.log(isPositive(-100.20) === false);
}

module.exports = isPositive;
