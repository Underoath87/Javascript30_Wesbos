//implementing sound
const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // if there is no audio stop running the function

  audio.currentTime = 0; // rewind to the start

  key.classList.add("playing");
  //   console.log(key);

  audio.play();
};

// remove transition from css class
const removeTransition = function (e) {
  if (e.propertyName !== "transform") return; // skip if it is not a transform

  // console.log(e.propertyName);

  this.classList.remove("playing");
};

// attach event listener in each key
const keys = document.querySelectorAll(".key");

keys.forEach(function (key) {
  key.addEventListener("transitionend", removeTransition);
});

// adding  volume
window.addEventListener("DOMContentLoaded", function () {
  const volumeSlider = document.getElementById("volume");
  volumeSlider.addEventListener("input", function () {
    const audios = document.querySelectorAll("audio");

    audios.forEach((audio) => (audio.volume = this.value));
  });
});

window.addEventListener("keydown", playSound);
