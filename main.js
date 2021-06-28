let elements = document.getElementsByName("cssPro");
let div = document.getElementById("modify");

function set() {
  for (let index = 0; index < elements.length; index++) {
    let property = elements[index].getAttribute("id");
    let cssValue = elements[index].value;

    div.style[property] = cssValue;
  }
}

document.getElementById("set").addEventListener("click", set);
