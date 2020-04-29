const greetform = document.querySelector(".js-form"),
  greetinput = greetform.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const show = "showing",
  USER_LS = "currentuse";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
function inputvalue(event) {
  event.preventDefault();
  const namevalue = greetinput.value;
  paintgreeting(namevalue);
  saveName(namevalue);
}

function formgreeting() {
  greetform.classList.add(show);
  greetform.addEventListener("submit", inputvalue);
}

function paintgreeting(text) {
  greetform.classList.remove(show);
  greeting.classList.add(show);
  greeting.innerText = `hello ${text}`;
}

function loadname() {
  const name = localStorage.getItem(USER_LS);
  if (name === null) {
    formgreeting();
  } else {
    paintgreeting(name);
  }
}

function init() {
  loadname();
}
init();
