const body = document.querySelector("body");

bgnumber = 4;

function paintbg() {
  const img = new Image();
  img.src = `images/${Math.floor(Math.random() * 4) + 1}.jpg`;
  img.classList.add("background");
  body.appendChild(img);
}
function init() {
  paintbg();
}
init();
