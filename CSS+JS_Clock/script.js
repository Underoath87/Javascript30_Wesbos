const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const digitalTime = document.querySelector(".digital-time");

const setDate = function () {
  const now = new Date();

  const seconds = now.getSeconds();
  console.log(seconds);
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  //   console.log(seconds);

  const minutes = now.getMinutes();
  const minsDegrees = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  //digital clock
  // format to 12hour am : pm
  const period = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 || 12;

  const formattedTime = `${String(hour12).padStart(2, 0)}:${String(
    minutes
  ).padStart(2, 0)}:${String(seconds).padStart(2, 0)}:${period}`;

  digitalTime.textContent = formattedTime;
};

// setInterval(setDate, 1000);
