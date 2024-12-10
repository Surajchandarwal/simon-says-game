let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// 1. Start the game on keypress
document.addEventListener("keypress", function () {
  if (!started) {
    started = true;
    levelup();
  }
});

// Function to flash the game button
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

// Function to flash the user button
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

// Function to play sound for a color or event
function playSound(soundName) {
  let audio = new Audio(`.${soundName}`);
  audio.play();
}

// 2. Level up function
function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  playSound("./casual-click-pop-ui-3-262120.mp3"); // Play level-up sound

  let randIdx = Math.floor(Math.random() * 4); // Random index from 0 to 3
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);

  console.log(gameSeq); // Log the game sequence for debugging
  gameFlash(randBtn); // Flash the random button
}

// Function to check the user's answer
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    playSound("./error-126627.mp3"); // Play game-over sound
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start.`;
    document.body.style.backgroundColor = "red";

    setTimeout(function () {
      document.body.style.backgroundColor = "white";
    }, 250);

    reset();
  }
}

// Function to handle button press
function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  playSound(userColor); // Play the button's sound
  checkAns(userSeq.length - 1);
}

// Add event listeners to all buttons
let allBtn = document.querySelectorAll(".btn");
for (let btn of allBtn) {
  btn.addEventListener("click", btnPress);
}

// Function to reset the game
function reset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}
 
 

let list = document.getElementById('list')
list.addEventListener('click', function(event) {
  // Check if the clicked element is an li
  if (event.target.tagName === 'LI') {
    alert('You clicked: ' + event.target.textContent);
  }
});
