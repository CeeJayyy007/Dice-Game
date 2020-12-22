document.querySelector("button").addEventListener("click", function (){

while (document.querySelector("button").innerHTML == "Roll Dice Again"){

    document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
    document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
    document.querySelector("h1").innerHTML = "Start!";

      document.querySelector("button").innerHTML = "Roll Dice";
  }

while (document.querySelector("button").innerHTML == "Roll Dice"){


  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[1];

  image1.setAttribute("src", randomImageSource);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[3].setAttribute("src", randomImageSource2);


  if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
  document.querySelector("img.flag1").classList.remove("invisible");
  document.querySelector("img.flag2").classList.add("invisible");
}else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
  document.querySelector("img.flag1").classList.add("invisible");
  document.querySelector("img.flag2").classList.remove("invisible");
  }else{
  document.querySelector("h1").innerHTML = "Players Draw!";
  document.querySelector("img.flag1").classList.remove("invisible");
  document.querySelector("img.flag2").classList.remove("invisible");
}document.querySelector("button").innerHTML = "Roll Dice Again";
}
}
);
