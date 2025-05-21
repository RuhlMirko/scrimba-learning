const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const allChars = [characters, symbols, numbers];

const passEl = document.getElementById("passLength");

function genPasswords() {
  let passLength = Number(passEl.value);
  console.log(passLength);
  if (isNaN(passLength)) {
    passLength = 15;
    passEl.value = 15;
  }
  let passStr1 = "";
  let passStr2 = "";
  for (let i = 0; i < passLength; i++) {
    let randChar = Math.floor(Math.random() * 3);
    let maxIndex = allChars[randChar].length;
    passStr1 += allChars[randChar][Math.floor(Math.random() * maxIndex)];
  }
  for (let i = 0; i < passLength; i++) {
    let randChar = Math.floor(Math.random() * 3);
    let maxIndex = allChars[randChar].length;
    passStr2 += allChars[randChar][Math.floor(Math.random() * maxIndex)];
  }

  document.getElementById("pass1").value = passStr1;
  document.getElementById("pass2").value = passStr2;
}
