let btn = document.querySelectorAll("button");
let player;
let playerScore = document.querySelector("#player-score");
let compScore = document.querySelector("#comp-score");
const game = () => {
  let comp = Math.floor(Math.random() * 3);

  if (
    (player == 1 && comp == 0) ||
    (player == 0 && comp == 2) ||
    (player == 2 && comp == 1)
  ) {
    playerScore.innerText++;
    alert("Player Wins!");
  } else if (comp != player) {
    compScore.innerText++;
    alert("Computer Wins!");
  } else {
    alert("Tie!");
  }
};
for (let i = 0; i < 3; i++) {
  btn[i].addEventListener("click", () => {
    player = i;
    game();
  });
}
let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  playerScore.innerText = 0;
  compScore.innerText = 0;
});
