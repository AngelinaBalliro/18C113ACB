
function Start() {
  var p1;
  var p2;
  var setNum;
  var guess;
  var guessCount = 0;

  alert("Welcome to the Javascript Guessing Game!")
  p1 = prompt("Player One, Enter a positive number!", "0");
  setNum = parseInt(p1);

  alert("Okay! Let's play!");
while (guess != setNum){
  p2 = prompt("Player Two, Enter your guess!", "0");
  guess = parseInt(p2);
  if (guess > setNum){
    alert("Your guess is too high!");
    guessCount++;
  }
  if (guess < setNum){
    alert("Your guess is too low!");
    guessCount++;
  }
  if (guess===setNum){
    guessCount++;
    alert("Congrats you guessed the number! It took you " + guessCount + " times");
  }
}
}
