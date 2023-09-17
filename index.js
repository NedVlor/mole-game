let rand;
const cells = document.querySelectorAll(".bar .cell");
const bar = document.querySelectorAll(".bar");

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
  }, 1000);
}, 2000);

//hummer movement
bar.addEventListener("click", (event) => {
  console.log(event);
});

//comper hitting with sus position and some actions
function clickOnCell(cellNumber) {
  console.log(cellNumber, rand);
  if (cellNumber == rand) {
    console.log("boom");
    const audio = document.querySelector("audio");
    console.log(audio);
    audio.currentTime = 8;
    audio.play(); //8-10 sec
    setTimeout(() => {
      audio.pause();
    }, 1500);
  }
}
