// Dark/Light mode toggle
const toggle = document.getElementById("mode-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Soft background sound (optional)
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
audio.loop = true;
window.addEventListener("load", () => {
  setTimeout(() => audio.play(), 1500);
});
