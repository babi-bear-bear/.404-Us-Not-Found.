const body = document.body;
const opening = document.querySelector(".opening");
const openingButton = document.querySelector(".opening__button");
const progressBar = document.querySelector(".reading-progress span");
const backToTop = document.querySelector(".back-to-top");
const finalPause = document.querySelector("#final-pause");
const finalWords = document.querySelector("#final-words");
const canvas = document.querySelector(".night-sky");
const context = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

body.classList.add("is-locked");

openingButton.addEventListener("click", () => {
  opening.classList.add("is-open");
  opening.setAttribute("aria-hidden", "true");
  body.classList.remove("is-locked");
  window.setTimeout(() => document.querySelector(".lead").classList.add("is-visible"), 500);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { rootMargin: "0px 0px -12%", threshold: 0.08 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

let endingStarted = false;
const endingObserver = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting || endingStarted) return;
    endingStarted = true;
    window.setTimeout(() => {
      body.classList.add("is-ending");
      finalWords.classList.add("is-visible");
    }, reduceMotion ? 0 : 2000);
  },
  { threshold: 0.6 },
);

endingObserver.observe(finalPause);

function updateReadingProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  progressBar.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
  backToTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.85);
}

window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

let stars = [];
let canvasWidth = 0;
let canvasHeight = 0;
let pixelRatio = 1;

function resizeSky() {
  pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  canvas.width = canvasWidth * pixelRatio;
  canvas.height = canvasHeight * pixelRatio;
  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  const starCount = Math.min(90, Math.floor((canvasWidth * canvasHeight) / 15000));
  stars = Array.from({ length: starCount }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    radius: Math.random() * 0.75 + 0.15,
    alpha: Math.random() * 0.35 + 0.08,
    drift: Math.random() * 0.018 + 0.004,
    phase: Math.random() * Math.PI * 2,
  }));
}

function drawSky(time = 0) {
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  stars.forEach((star) => {
    const shimmer = reduceMotion ? 1 : 0.78 + Math.sin(time * 0.00025 + star.phase) * 0.22;
    star.y -= reduceMotion ? 0 : star.drift;
    if (star.y < -2) star.y = canvasHeight + 2;

    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(214, 194, 154, ${star.alpha * shimmer})`;
    context.fill();
  });

  if (!reduceMotion) window.requestAnimationFrame(drawSky);
}

window.addEventListener("resize", resizeSky);
resizeSky();
drawSky();
updateReadingProgress();
