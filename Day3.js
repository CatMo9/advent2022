var data = require("./DummyData3");
var practiceData = `TZZjzzZLfZbzgzZNNJZjwCVbwMmhwCbBpCMMBCbM
qRQPDqnWFQDtCCBQmQwmGGVG
FPllWPDPrncZsLVrgSZTSZ
RczPzRzvflVwfplrZQglmmJJDGQJ`;

// 16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.
var test = `apbcdefp
abLcdLef
PabcdPef
avbcdvef
tabctdef
abscdefs`;

function findWhatRepeats(singleString) {
  let half = singleString.length / 2;
  let firstBag = singleString.substring(0, half);
  let secondBag = singleString.substring(half);
  let pointsAnswer = `0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  let i = 0,
    repeatingCharacter;
  while (i < half) {
    if (secondBag.indexOf(firstBag[i]) >= 0) {
      repeatingCharacter = firstBag[i];
      i = half;
    }
    i++;
  }
  console.log(`did you know the repeating character is: ${repeatingCharacter}`);
  return pointsAnswer.indexOf(repeatingCharacter);
}

function rucksackReorganization(rucksackString) {
  //for each find first index of newLine
  let i = 0,
    nextLineIndex = 0,
    lineEnd,
    totalPoints = 0;
  lineEnd = rucksackString.indexOf("\n", nextLineIndex);
  let currentRucksack = "";
  // separate each rucksack string
  while (lineEnd <= rucksackString.length && i < 2) {
    currentRucksack = rucksackString.substring(nextLineIndex, lineEnd);
    console.log(
      `Here is the next: ${currentRucksack} \n with a length of: ${currentRucksack.length}`
    );
    totalPoints += findWhatRepeats(currentRucksack);
    console.log(`here is the total points so far: ${totalPoints}`);

    nextLineIndex = lineEnd + 1;
    lineEnd = rucksackString.indexOf("\n", nextLineIndex + 1);
    if (lineEnd === -1) {
      lineEnd = rucksackString.length;
      i++;
    }
  }
  console.log(`Sum total points = ${totalPoints}`);
}

rucksackReorganization(data);
