function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function setRandomImage(imageElement) {
    let randomNumber = getRandomNumber();
    let randomDiceImg = `dice${randomNumber}.png`;
    let randomImgsrc = `images/${randomDiceImg}`;
    imageElement.setAttribute("src", randomImgsrc);
    return randomNumber;
  }
  
  function play() {
    let image1 = document.querySelectorAll("img")[0];
    let randomNumber1 = setRandomImage(image1);
  
    let image2 = document.querySelectorAll("img")[1];
    let randomNumber2 = setRandomImage(image2);
  
    let winnerMsg = document.querySelector("#winner-msg");
  
    if (randomNumber1 > randomNumber2) {
      winnerMsg.innerHTML = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
      winnerMsg.innerHTML = "Player 2 wins!";
    } else {
      winnerMsg.innerHTML = "It's a tie!";
    }
  }
  
  let rollBtn = document.querySelector("#roll-btn");
  rollBtn.addEventListener("click", play);
  