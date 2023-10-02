let rand;
let life = 3;
let userLife = 3;
let attempts = 3;
const cells = document.querySelectorAll(".bar .cell");
const bar = document.querySelector(".bar");
const hummer = document.querySelector(".hummer");
const audio = document.querySelector("#hamster-sound");
const punchSound = document.querySelector("#punch-sound");
const monsterSound = document.querySelector("#monster-sound");
const uWinSound = document.querySelector("#u-win");
const szwingSound = document.querySelector("#szwing");
const gameOverSound = document.querySelector("#game-over");
const heartsSus = document.querySelector(".left .hearts");
const heartsUser = document.querySelector(".right .hearts");
const effects = document.querySelector(".effects");
const gameOverScreen = document.querySelector(".game-over-screen");
const youWinScreen = document.querySelector(".you-win-screen");
const hamsterFairy = document.querySelector(".hamster-fairy");
const healingHeart = document.querySelector(".healing-heart");

refreshHeartsInPanel();

// random showing sus
const random = () => Math.round(Math.random() * 8);
setInterval(() => {
  rand = random();
  cells[rand].innerHTML = '<img src="./sas.png" draggable="false"/>';
  setTimeout(() => {
    cells[rand].innerHTML = '<img src="./dr.png" draggable="false"/>';
    rand = null;
  }, 1000);
}, 2000);

//////////////////////////////////////////////////////////////////////////// hummer movement
function hammerMovement(event) {
  //console.log(event);
  const x = event.clientX;
  const y = event.clientY;
  //console.log(x, y);
  hummer.style.left = x - 251 + "px";
  hummer.style.top = y - 210 + "px";
  hummer.style.transform = "rotate(115deg)";
  punchSound.play();
  setTimeout(() => {
    hummer.style.left = 0 + "px";
    hummer.style.top = 600 + "px";
    hummer.style.transform = "rotate(0deg)";
  }, 1000);
}
bar.addEventListener("click", hammerMovement);
hamsterFairy.addEventListener("click", hammerMovement);

//compare hitting with sus position and some actions
function clickOnCell(cellNumber) {
  //console.log(cellNumber, rand);
  attempts--;
  // colizion
  if (cellNumber == rand) {
    setTimeout(() => {
      life--;
      refreshHeartsInPanel();
      if (life < 1) {
        return won();
      }
      if (attempts < 1) {
        hamsterAttack();
        life = 3;
        attempts = 3;
        userLife--;
        refreshHeartsInPanel();
      }
      if (userLife < 1) {
        gameOver();
      }
    }, 1000);
    console.log("boom");
    console.log(audio);
    audio.currentTime = 8;
    audio.play(); //8-10 sec
    setTimeout(() => {
      audio.pause();
    }, 1500);
  }
}

function refreshHeartsInPanel() {
  heartsSus.innerHTML = "";
  for (let i = 0; i < life; i++) {
    heartsSus.innerHTML +=
      '<img class="heart" src="./src/heard.png" draggable="false"/>';
  }
  heartsUser.innerHTML = "";
  for (let i = 0; i < userLife; i++) {
    heartsUser.innerHTML +=
      '<img class="heart" src="./src/heard.png" draggable="false"/>';
  }
}

function hamsterAttack() {
  monsterSound.play();
  szwingSound.play();
  effects.style.display = "flex";
  setTimeout(() => {
    effects.style.display = "none";
  }, 1000);
}

function gameOver() {
  gameOverScreen.style.display = "flex";
  gameOverSound.play();
}

function retry() {
  setTimeout(() => {
    location.reload();
  }, 1000);
}

function won() {
  youWinScreen.style.display = "flex";
  uWinSound.play();
}

////////////////////////////////////////////////////////////////////////////// hamster fairy block

let isHamsterFairyActive = false;

// muve fairy to game area
setInterval(() => {
  hamsterFairy.style.right = "100px";
  setTimeout(() => {
    isHamsterFairyActive = true;
    healingHeart.style.display = "block";
  }, 1000);
}, 7000);

//get away fairy
function getAwayFairy() {
  console.log(1);
  hamsterFairy.style.right = "-200px";
  isHamsterFairyActive = false;
  healingHeart.style.display = "none";
}

//wings animation
setInterval(() => {
  hamsterFairy.src = "./src/fairy-2.png";
  setTimeout(() => {
    hamsterFairy.src = "./src/fairy-1.png";
  }, 150);
}, 300);

// hamster fairy healing per 1sec
setInterval(() => {
  if (isHamsterFairyActive) {
    //    console.log("healing");
    if (life < 3) life++;
    refreshHeartsInPanel();
  }
}, 1000);

/////////////////////////////////////////////////////////////////////////////// prevent draging for img
document.addEventListener("dragstart", function (event) {
  if (event.target.tagName == "IMG") {
    event.preventDefault();
  }
});
