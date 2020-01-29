
let helpers = require('../printHelpers');

// @param {number} height - The height of the square to print

function printSolidSquare(height) {
 
  for (let i = 0; i < height; i++) {
    let numChars = height;

    helpers.printCountTimes('#', numChars);
    helpers.printNewLine();
  }
}


function solidSquarePrintTest(height) {
  console.log('');
  console.log(`Printing a SOLID SQUARE of height ${height}:`);

  printSolidSquare(height);
}

if (require.main === module) {
  

  solidSquarePrintTest(0);
  solidSquarePrintTest(1);
  solidSquarePrintTest(2);
  solidSquarePrintTest(3);
  solidSquarePrintTest(5);
}

module.exports = printSolidSquare;
