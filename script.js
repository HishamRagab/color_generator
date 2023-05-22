let boxs = document.querySelectorAll(".box");
let lengthBoxs = boxs.length;
let colors = [];

changeColor();
function changeColor() {
  let arrayColor = [];
  for (let i = 0; i < lengthBoxs; i++) {
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += "ABCDEF0123456789"[Math.floor(Math.random() * 16)];
    }
    arrayColor.push(color);
  }
  boxs.forEach((box, index) => {
    box.firstElementChild.style.backgroundColor = arrayColor[index];
    box.lastElementChild.textContent = arrayColor[index];
  });
  colors = arrayColor;
  arrayColor = [];
}

boxs.forEach((box, index) => {
  box.onclick = function () {
    box.classList.add("copied");
    box.lastElementChild.textContent = "COPIED";
    navigator.clipboard.writeText(colors[index]);
    setTimeout(() => box.classList.remove("copied"), 100);
    setTimeout(() => (box.lastElementChild.textContent = colors[index]), 1000);
  };
});

document.querySelector("button").addEventListener("click", changeColor);
