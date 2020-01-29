function addCommas(number) {
    let stringNumber = ' '
    let string = ' '
    stringNumber = number.toString()
    if(stringNumber.length > 3) {
        for(i=0 ;i < stringNumber.length; i++){
            string = stringNumber.slice(0, stringNumber.length - 3) + ',' + stringNumber.slice(stringNumber.length-3, stringNumber.length) 
        }
    }
    else {
        return number
    } 
    return string
    }
let test;
test = addCommas(100);
console.log(test);
test = addCommas(1000);
console.log(test);
test = addCommas(12345);
console.log(test);
test = addCommas(1234500000);
console.log(test);