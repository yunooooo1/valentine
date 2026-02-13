// ============================
// QUESTION GATE LOGIC
// ============================
const gate = document.getElementById("questionGate");
const landingGate = document.getElementById("landing");
const answerInput = document.getElementById("answerInput");
const errorMsg = document.getElementById("errorMsg");

document.getElementById("checkAnswer").addEventListener("click", () => {
  const answer = answerInput.value.trim().toLowerCase();

  if (answer === "recon phantom") {
    gate.style.display = "none";
    landingGate.style.display = "flex";
  } else {
    errorMsg.textContent = "Oops… try again ❤️";
  }
});

// ============================
// Elements
// ============================
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const openLetter = document.getElementById("openLetter");
const letterSection = document.getElementById("letterSection");
const bgMusic = document.getElementById("bgMusic");
const container = document.getElementById("landing");

// ============================
// NO BUTTON MOVE
// ============================
noBtn.addEventListener("mouseover", () => {
  const rect = container.getBoundingClientRect();
  const maxX = rect.width - noBtn.offsetWidth;
  const maxY = rect.height - noBtn.offsetHeight;

  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});

// ============================
// YES BUTTON CLICK
// ============================
yesBtn.addEventListener("click", () => {
  popup.style.display = "block";
  overlay.style.display = "block";
  popup.style.transform = "translate(-50%, -50%) scale(1)";
  bgMusic.play().catch(() => {});
});

// ============================
// OPEN LOVE LETTER + ANIMATION
// ============================
openLetter.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";

  stopHearts();

  letterSection.style.display = "block";

  const card = document.querySelector(".letter-card");
  const paragraphs = card.querySelectorAll("p");

  // restart card animation
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "letterReveal 1s ease forwards";

  // stagger paragraph fade
  paragraphs.forEach((p, i) => {
    p.style.animation = `textFade 1s ease forwards ${0.4 + i * 0.3}s`;
  });

  window.scrollTo({
    top: letterSection.offsetTop,
    behavior: "smooth"
  });
});

// ============================
// FLOATING HEARTS
// ============================
const heartsContainer = document.querySelector(".hearts-container");
const heartEmojis = ["💖", "💕", "💗", "💘", "💝"];

let heartInterval = null;

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent =
    heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = 10 + Math.random() * 20 + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 10000);
}

function startHearts() {
  if (!heartInterval) heartInterval = setInterval(createHeart, 300);
}

function stopHearts() {
  clearInterval(heartInterval);
  heartInterval = null;
  heartsContainer.innerHTML = "";
}

startHearts();
