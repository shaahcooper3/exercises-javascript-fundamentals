
function isNegative(num) {
  return num < 0;
}

if (require.main === module) {
  console.log('Running sanity checks for isNegative:');

  console.log(isNegative(0) === false);
  console.log(isNegative(1) === false);
  console.log(isNegative(-1) === true);
  console.log(isNegative(-100.20) === true);
}

module.exports = isNegative;
