
function remainderOf(n,d) {
  let answer = n/d;
  let whole = parseInt(answer);
  let final = whole*d;
  let rem = n-final;
  return rem


}


if (require.main === module) {
  console.log('Running sanity checks for remainderOf');
  console.log(remainderOf(10,3)=== 0);
  console.log(remainderOf(10,5)=== 0);
  console.log(remainderOf(1090,4)=== 0)


}

module.exports = remainderOf;
