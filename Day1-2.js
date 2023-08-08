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

//only use if current > topThree[2]
function findTopThree(currentValue, topThree) {
  let newTopThree = [];
  if (currentValue > topThree[0]) {
    newTopThree.push(currentValue);
    newTopThree.push(topThree[0]);
    newTopThree.push(topThree[1]);
  } else if (currentValue > topThree[1]) {
    newTopThree.push(topThree[0]);
    newTopThree.push(currentValue);
    newTopThree.push(topThree[1]);
  } else {
    newTopThree.push(topThree[0]);
    newTopThree.push(topThree[1]);
    newTopThree.push(currentValue);
  }
  return newTopThree;
}

function findHeaviestElf(data) {
  let i = 0,
    newLineCount = 0,
    currentNumber,
    substringStart = 0,
    currentSum = 0;
  topThree = [0, 0, 0];

  // loop through for the entire data string
  while (i < data.length) {
    if (data[i] > 0 || data[i] === "0") {
      //this is another digit, move on to next index
      if (newLineCount > 0) {
        newLineCount = 0;
      }
    } else {
      // it is a new line, so the number is complete
      newLineCount++;
      if (newLineCount > 1) {
        // this means there were two newLines in a row, calculate Elf food total
        if (currentSum > topThree[2]) {
          topThree = findTopThree(currentSum, topThree);
          console.log("These are the topThree: ", topThree);
        }

        currentSum = 0;
        newLineCount = 0;
        if (i + 1 < data.length) {
          substringStart = i + 1;
        }
      } else {
        // add the currentNumber to the currentSum
        currentNumber = Number(data.substring(substringStart, i));
        currentSum += currentNumber;
        substringStart = i + 1;
      }
    }
    i++;
  }
  currentNumber = Number(data.substring(substringStart, i));
  currentSum += currentNumber;

  if (currentSum > topThree[2]) {
    topThree = findTopThree(currentSum, topThree);
    console.log("These are the topThree: ", topThree);
  }

  return topThree[0] + topThree[1] + topThree[2];
}

console.log("is should be 105:", findHeaviestElf(premadeData));
