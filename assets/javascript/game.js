// Crystal Variables
var crystal = {
  blueK: {
    name: "Blue Kryptonite",
    value: 0
  },
  greenK: {
    name: "Green Kryptonite",
    value: 0
  },
  redK: {
    name: "Red Kryptonite",
    value: 0
  },
  goldK: {
    name: "Gold Kryptonite",
    value: 0
  }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function () {
  currentScore = 0;

  targetScore = getRandom(19, 120);

  crystal.blueK.value = getRandom(1, 12);
  crystal.redK.value = getRandom(1, 12);
  crystal.greenK.value = getRandom(1, 12);
  crystal.goldK.value = getRandom(1, 12);

  $("#your-score").text(currentScore);
  $("#target-score").text(targetScore);
};

var checkWin = function () {
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    lossCount++;
    $("#loss-count").text(lossCount);
    startGame();
  } else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    winCount++;
    $("#win-count").text(winCount);
    startGame();
  }

};

var addValues = function (clickedCrystal) {
  currentScore += clickedCrystal.value;
  $("#your-score").text(currentScore);
  checkWin();
  console.log("Your Score: " + currentScore);
};

// Starts the Game the First Time.
startGame();

$("#blue").click(function () {
  addValues(crystal.blueK);
});

$("#red").click(function () {
  addValues(crystal.redK);
});

$("#green").click(function () {
  addValues(crystal.greenK);
});

$("#gold").click(function () {
  addValues(crystal.goldK);
});