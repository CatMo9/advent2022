const premadeData = require("./DummyData2");

let testData = `C X
A Z
B Y
B Y
A Z
C X
C X
A Z
B X
B Y
C X
C Z
A X
B X
B Y`;

// A X --> LOSE, 0pt
// B Y --> DRAW, 3pt
// C Z --> WIN, 6pt

function pointsForChoiceAndWin(me, opp) {
  let roundPoints = 0;

  if (opp === "A") {
    if (me === "X") {
      // LOSE against rock -> play scissors 0 + 3
      roundPoints += 3;
    } else if (me === "Y") {
      // DRAW against rock -> play rock 3 + 1
      roundPoints += 4;
    } else {
      // WIN against rock -> play paper 6 + 2
      roundPoints += 8;
    }
  } else if (opp === "B") {
    if (me === "X") {
      // LOSE against paper -> play rock 0 + 1
      roundPoints += 1;
    } else if (me === "Y") {
      // DRAW against paper -> play paper 3 + 2
      roundPoints += 5;
    } else {
      // WIN against paper -> play scissors 6 + 3
      roundPoints += 9;
    }
  } else {
    if (me === "X") {
      // LOSE against scissors -> play paper 0 + 2
      roundPoints += 2;
    } else if (me === "Y") {
      // DRAW against scissors -> play scissors 3 + 3
      roundPoints += 6;
    } else {
      // WIN against scissors -> play rock 6 + 1
      roundPoints += 7;
    }
  }
  return roundPoints;
}

function totalPoints(dataString) {
  //loss = 0, draw = 3, win = 6

  let oppChoice = 0,
    myChoice = 2,
    length = dataString.length,
    total = 0;
  while (oppChoice < length) {
    total += pointsForChoiceAndWin(dataString[myChoice], dataString[oppChoice]);

    oppChoice += 4;
    myChoice += 4;
  }
  return total;
}

console.log(`Do you know how many points: ${totalPoints(premadeData)}`);
