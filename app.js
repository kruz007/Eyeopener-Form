let image = document.querySelector("img");
let pass = document.querySelectorAll("input");

// let pass = document.getElementById("password");

let change = () => {
  if (image.getAttribute("src") == "assets/eyecloser.svg") {
    pass[1].setAttribute("type", "text");
    image.setAttribute("src", "assets/eyeopener.svg");
  } else {
    pass[1].setAttribute("type", "password");
    image.setAttribute("src", "assets/eyecloser.svg");
  }
};

image.addEventListener("click", change);
