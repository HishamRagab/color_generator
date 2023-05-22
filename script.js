let boxs = document.querySelectorAll(".box");
let lengthColor = boxs.length;
let colors = [];

changeColor();
function changeColor() {
  let arrColor = [];
  for (let i = 0; i < lengthColor; i++) {
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += "ABCDEF0123456789"[Math.floor(Math.random() * 16)];
    }
    arrColor.push(color);
  }
  boxs.forEach((box, i) => {
    box.firstElementChild.style.cssText = `background-color: ${arrColor[i]}`;
    box.lastElementChild.textContent = arrColor[i];
  });
  colors = arrColor;
  arrColor = [];
}

boxs.forEach((box, i) => {
  box.onclick = function () {
    box.classList.add("copied");
    box.lastElementChild.textContent = "COPIED";
    navigator.clipboard.writeText(colors[i]);
    setTimeout(() => box.classList.remove("copied"), 100);
    setTimeout(() => (box.lastElementChild.textContent = colors[i]), 1000);
  };
});

document.querySelector("button").addEventListener("click", changeColor);
///////////////////////////////////////////
function twoHighest(arr) {
  let arr2 = arr.sort((a, b) => b - a).filter((f, i, r) => f != r[i + 1]);
  return arr2.length >= 2 ? arr2.slice(0, 2) : arr2[0];
}
console.log(twoHighest([15, 20, 20, 17]));
