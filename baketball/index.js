const homeEL = document.getElementById("home-score");
const guestEl = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;
homeEL.textContent = homeCount;
guestEl.textContent = guestCount;

function addHome(points) {
  homeCount += points;
  homeEL.textContent = homeCount;
}

function addGuest(points) {
  guestCount += points;
  guestEl.textContent = guestCount;
}
