let rand;
const cells = document.querySelectorAll(".bar .cell");
const bar = document.querySelector(".bar");
const hummer = document.querySelector(".hummer");
const audio = document.querySelector("#hamster-sound");
const punchSound = document.querySelector("#punch-sound");

// example
setTimeout(() => {
  console.log(cells[5].innerHTML);
  cells[5].innerHTML = '<img src="./dr.png" />';
}, 3000);

// random showing sus
const random = () => Math.round(Math.random() * 8);
setInterval(() => {
  rand = random();
  cells[rand].innerHTML = '<img src="./sas.png" />';
  setTimeout(() => {
    cells[rand].innerHTML = '<img src="./dr.png" />';
    rand = null;
  }, 1000);
}, 2000);

//hummer movement
bar.addEventListener("click", (event) => {
  console.log(event);
  const x = event.clientX;
  const y = event.clientY;
  console.log(x, y);
  hummer.style.left = x - 251 + "px";
  hummer.style.top = y - 210 + "px";
  hummer.style.transform = "rotate(115deg)";
  punchSound.play();
  setTimeout(() => {
    hummer.style.left = 0 + "px";
    hummer.style.top = 600 + "px";
    hummer.style.transform = "rotate(0deg)";
  }, 1000);
});

//comper hitting with sus position and some actions
function clickOnCell(cellNumber) {
  console.log(cellNumber, rand);
  if (cellNumber == rand) {
    console.log("boom");
    console.log(audio);
    audio.currentTime = 8;
    audio.play(); //8-10 sec
    setTimeout(() => {
      audio.pause();
    }, 1500);
  }
}
