var randomnumber1 = Math.floor(Math.random() *6 + 1 )

var randomdice = "images/dice" + randomnumber1 + ".png"

document.querySelector(".img1").setAttribute("src",randomdice);


var randomnumber2 = Math.floor(Math.random() *6 + 1 )

var randomdice2 = "images/dice" + randomnumber2 + ".png"

document.querySelector(".img2").setAttribute("src",randomdice2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1"). innerHTML= "🚩 Player 1 Wins!";
} else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "😎 It's a Draw!";
}

