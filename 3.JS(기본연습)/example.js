const title = document.querySelector("#title");

const Click_class = "clicked";

function handleClick() {
  title.classList.toggle(Click_class);
}

title.addEventListener("click", handleClick);
