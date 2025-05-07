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
  /*
  homeEl.classList.remove("leading", "losing");
  guestEl.classList.remove("leading", "losing");
  */
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
