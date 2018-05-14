var cels = document.getElementsByClassName("cel");
var turnPlayer = "X";
var font = document.getElementById("tabla");
var row = document.getElementsByClassName("row");

font.style.fontSize = "50px";

[].forEach.call(cels, function (el) {
  el.addEventListener("click", buttonClicked);
});

function buttonClicked() {
  console.log(this.innerHTML);
  if (this.innerHTML == "") {
    play(this);
    changePlayer();
  }
}

function play(el) {
  el.innerHTML = turnPlayer;
}

function changePlayer() {
  if (turnPlayer == "X") { turnPlayer = "O"; }
  else if (turnPlayer == "O") { turnPlayer = "X"; }
}
