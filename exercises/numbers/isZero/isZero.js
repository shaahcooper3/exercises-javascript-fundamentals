function isZero(num) {
  return num === 0;
}

if (require.main === module) {
  console.log('Running sanity checks for isZero:');

  console.log(isZero(0) === true);
  console.log(isZero(1) === false);
  console.log(isZero(-1) === false);
  console.log(isZero(-100.20) === false);
}

module.exports = isZero;
