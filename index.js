let rand;
const cells = document.querySelectorAll(".bar .cell");
setTimeout(() => {
  console.log(cells[5].innerHTML);

  cells[5].innerHTML = '<img src="./dr.png" />';
}, 3000);
const random = () => Math.round(Math.random() * 8);
setInterval(() => {
  rand = random();
  cells[rand].innerHTML = '<img src="./sas.png" />';
  setTimeout(() => {
    cells[rand].innerHTML = '<img src="./dr.png" />';
  }, 1000);
}, 2000);
cells.forEach((cell) => {
  console.log(cell);
  cell.addEventListener("click", (event) => {
    //    console.log(event);
  });
});
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
