// bai 1
function centuryFromYear(year) {
  if (year % 100 === 0) {
    console.log(year / 100);
  } else {
    console.log(Math.ceil(year / 100));
  }
}
centuryFromYear(1995);

// bai 2
function checkPalindrone(inputString){
  for (let index = 0; index < inputString.length; index++) {
    if (inputString[index] !== inputString[inputString.length - index - 1]){
      return false;
    }
    return true;
  }
}
console.log(checkPalindrone("abababab"));

// bai 3 
function adjacentlementisPoduct(inputArray){
    let max =inputArray[0]*inputArray[1]
    for (let index = 0; index < array.length; index++) {
       if(inputArray(index) * inputArray(index - 1 ) > max)
        max = inputArray[index]*inputArray[index+1]
    }
}
return max; 

// bai 4 
const arr = []
function findOddNumber(inputArray){
    for(const item of inputArray){
        if(item%2 === 0){
            arr.push(item)
        }
    }
    return arr
}

// arrow function
