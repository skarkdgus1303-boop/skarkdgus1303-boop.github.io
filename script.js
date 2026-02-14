const text = "🚀 남강현 유니버스 🚀";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();

/* 별 */
for (let i = 0; i < 150; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(star);
}

/* 마우스 빛 */
document.addEventListener("mousemove", (e) => {
  const light = document.getElementById("light");
  light.style.left = e.pageX - 10 + "px";
  light.style.top = e.pageY - 10 + "px";
});
