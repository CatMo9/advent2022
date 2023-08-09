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

// A X --> Rock, 1pt
// B Y --> Paper, 2pt
// C Z --> Scissors, 3pt

function pointsForChoiceAndWin(me, opp) {
  let roundPoints = 0;
  // if I CHOSE ROCK(X) +1
  if (me === "X") {
    roundPoints += 1;
    // A = draw (3), B = lose, C = win (6)
    if (opp === "A") {
      roundPoints += 3;
    } else if (opp === "C") {
      roundPoints += 6;
    }
  } else if (me === "Y") {
    roundPoints += 2;
    // A = win (6), B = draw (3), C = lose
    if (opp === "B") {
      roundPoints += 3;
    } else if (opp === "A") {
      roundPoints += 6;
    }
  } else {
    roundPoints += 3;
    // A = lose, B = win (6), C = draw (3)
    if (opp === "C") {
      roundPoints += 3;
    } else if (opp === "B") {
      roundPoints += 6;
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
