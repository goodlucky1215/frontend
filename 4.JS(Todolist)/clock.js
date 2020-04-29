const clock = document.querySelector(".js-clock"),
  h1 = clock.querySelector("h1");

function paintclock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  h1.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  paintclock();
  setInterval(paintclock, 1000);
}

init();
