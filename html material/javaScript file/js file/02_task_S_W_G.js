let word = ["S", "W", "G"];
let game = true || false;
while (game) {
  let user = prompt("Enter Gun (G) Water (W) Snake(S");
  let computer = word[Math.round(Math.random() * 3)];
  if (user == computer) {
    document.write("Game Draw");
  } else if (user == "S" && computer == "W") {
    document.write(computer);
    document.write("You Win");
  } else if (user == "W" && computer == "S") {
    document.write(computer);
    document.write("Computer Win");
  } else if (user == "G" && computer == "S") {
    document.write(computer);
    document.write("You Win");
  } else if (user == "S" && computer == "G") {
    document.write(computer);
    document.write("Computer Win");
  } else if (user == "W" && computer == "G") {
    document.write(computer);
    document.write("You Win");
  } else if (user == "G" && computer == "W") {
    document.write(computer);
    document.write("Computer Win");
  }
  game = confirm("Are you play again");
}
