const homeEl = document.getElementById("home-score");
const guestEl = document.getElementById("guest-score");

/* Setting score */
let homeCount = 0;
let guestCount = 0;
homeEl.textContent = homeCount;
guestEl.textContent = guestCount;

function addHome(points) {
  homeCount += points;
  homeEl.textContent = homeCount;
  checkLeader();
}

function addGuest(points) {
  guestCount += points;
  guestEl.textContent = guestCount;
  checkLeader();
}

let maxCount = 0;

function checkLeader() {
  if (homeCount >= maxCount) {
    guestEl.classList.remove("leading");
    guestEl.classList.add("losing");

    maxCount = homeCount;

    homeEl.classList.add("leading");
    homeEl.classList.remove("losing");
  }
  if (guestCount >= maxCount) {
    homeEl.classList.remove("leading");
    homeEl.classList.add("losing");

    maxCount = guestCount;

    guestEl.classList.add("leading");
    guestEl.classList.remove("losing");
  }
  console.log(homeCount, guestCount, maxCount);
}

function newGame() {
  homeCount = 0;
  guestCount = 0;
  homeEl.textContent = homeCount;
  guestEl.textContent = guestCount;
  homeEl.classList.remove("leading", "losing");
  guestEl.classList.remove("leading", "losing");
  startStopwatch();
}

const timerEl = document.getElementById("timer");
let startTime;
let intervalId;
timerEl.textContent = "00:00";

function startStopwatch() {
  startTime = Date.now(); // record the start time
  intervalId = setInterval(() => {
    const ms = Date.now() - startTime;
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    timerEl.textContent = `${minutes}:${seconds}`;
  }, 1000); // log every second
}

function stopStopwatch() {
  clearInterval(intervalId);
}
