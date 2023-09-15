const cells = document.querySelectorAll(".bar .cell");
setTimeout(() => {
  console.log(cells[5].innerHTML);

  cells[5].innerHTML = '<img src="./dr.png" />';
}, 3000);
const random = () => Math.round(Math.random() * 8);
setInterval(() => {
  console.log(random());
  const rand = random();
  cells[rand].innerHTML = '<img src="./sas.png" />';
  setTimeout(() => {
    cells[rand].innerHTML = '<img src="./dr.png" />';
  }, 1000);
}, 2000);
