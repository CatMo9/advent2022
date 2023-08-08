const premadeData = require("./Day1Data");
const testSmallData = require("./SmallData");

//find biggest sum
function findBiggestSum(biggest, current) {
  if (current > biggest) {
    return current;
  } else {
    return biggest;
  }
}

function findHeaviestElf(data) {
  let i = 0,
    newLineCount = 0,
    currentNumber,
    substringStart = 0,
    biggestSum = 0,
    currentSum = 0;

  // loop through for the entire data string
  while (i < data.length) {
    if (data[i] > 0 || data[i] === "0") {
      //this is another digit, move on to next index
      if (newLineCount > 0) {
        newLineCount = 0;
      }
    } else {
      // it is a new line
      newLineCount++;

      if (newLineCount > 1) {
        // this means there were two newLines in a row, reset all variables
        // console.log(
        //   `Which is bigger? currentSum ${currentSum} or BIGGESTSum ${biggestSum}`
        // );
        biggestSum = findBiggestSum(biggestSum, currentSum);
        // console.log(`This is the biggest: ${biggestSum}`);

        currentSum = 0;
        newLineCount = 0;
        if (i + 1 < data.length) {
          substringStart = i + 1;
        }
      } else {
        // add the currentNumber to the currentSum
        currentNumber = Number(data.substring(substringStart, i));
        // console.log(`currentNumber = ${currentNumber}`);
        currentSum += currentNumber;
        // console.log(`AND currentSum = ${currentSum}`);
        substringStart = i + 1;
      }
    }
    i++;
  }
  currentNumber = Number(data.substring(substringStart, i));
  // console.log(`currentNumber = ${currentNumber}`);
  currentSum += currentNumber;
  // console.log(`AND currentSum = ${currentSum}`);
  // console.log(
  // `Which is bigger? currentSum ${currentSum} or BIGGESTSum ${biggestSum}`
  // );
  biggestSum = findBiggestSum(biggestSum, currentSum);
  // console.log(`This is the biggest: ${biggestSum}`);
  return biggestSum;
}

console.log("is should be 206:", findHeaviestElf(premadeData));
