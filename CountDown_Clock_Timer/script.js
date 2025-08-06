let countDown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

const alarmSound = new Audio(
  "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
);

// // This is a simple countdown timer that allows you to start a timer
// // by clicking buttons or entering minutes in a form. It displays the time left
// const timer = function (seconds) {
//   clearInterval(countDown);

//   // Get the current time in milliseconds
//   // and calculate the end time by adding the specified seconds
//   const now = Date.now();

//   const then = now + seconds * 1000;
//   displayTimeLeft(seconds);
//   displayEndTime(then);

//   countDown = setInterval(() => {
//     let secondsLeft = Math.round((then - Date.now()) / 1000);

//     if (secondsLeft <= 0) {
//       clearInterval(countDown);
//       secondsLeft = 0;
//       alarmSound.currentTime = 0; // Reset sound to start
//       alarmSound.play();
//       //   console.log("Timer finished");
//     }
//     displayTimeLeft(secondsLeft);
//   }, 1000);
// };

// // This function displays the time left in a formatted way
// // It updates the timer display and the document title
// const displayTimeLeft = function (seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainderSeconds = seconds % 60;

//   const display = `${minutes}:${
//     remainderSeconds < 10 ? "0" : ""
//   }${remainderSeconds}`;

//   timerDisplay.textContent = display;
//   document.title = display;
//   //   console.log(minutes, remainderSeconds);
// };

// // This function displays the end time when the timer will finish
// // It formats the time to show hours and minutes
// const displayEndTime = function (timestamp) {
//   const end = new Date(timestamp);
//   const hour = end.getHours();
//   const adjustedHours = hour > 12 ? hour - 12 : hour;
//   const minutes = end.getMinutes();
//   endTime.textContent = `Be Back At ${adjustedHours}:${
//     minutes < 10 ? "0" : ""
//   }${minutes}`;
// };

// // This function starts the timer when a button is clicked
// // It retrieves the data-time attribute from the button and calls the timer function
// const startTime = function () {
//   //   console.log(this.dataset.time);
//   const seconds = +this.dataset.time;
//   timer(seconds);
// };

// // This event listener adds a click event to each button
// // When a button is clicked, it starts the timer with the specified seconds
// buttons.forEach((button) => button.addEventListener("click", startTime));

// // This event listener handles the form submission
// document.customForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const mins = this.minutes.value;
//   timer(mins * 60);
//   //   console.log(mins);
// });

const timer = function (seconds) {
  clearInterval(countDown);
  const now = Date.now();
  // console.log(now);

  const then = now + seconds * 1000;
  // console.log(then);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countDown = setInterval(() => {
    let secondsLeft = Math.round((then - Date.now()) / 1000);
    console.log(secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(countDown);
      secondsLeft = 0;
      alarmSound.currentTime = 0;
      alarmSound.play();
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = function (seconds) {
  const minutes = Math.round(seconds / 60);
  const remainderSeconds = seconds % 60;

  // console.log(minutes, remainderSeconds);

  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;

  timerDisplay.textContent = display;
  document.title = display;
};

const displayEndTime = function (timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHours = hours > 12 ? hours - 12 : hours;

  endTime.textContent = `Be back at ${adjustedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
};

const startTime = function (e) {
  const seconds = +this.dataset.time;
  // console.log(seconds);
  timer(seconds);
};

buttons.forEach((button) => button.addEventListener("click", startTime));

document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
});
