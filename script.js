let bg = ["#55efc4", "#00b894", "#ffeaa7", "#ff7675", "#fab1a0"];
let btn = document.querySelector(".btn-change");

btn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * bg.length);
  document.body.style.backgroundColor = bg[randomNumber];
});
