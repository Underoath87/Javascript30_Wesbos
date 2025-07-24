// Get Our element
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreenButton = player.querySelector(".fullscreen");

// Build functions

const togglePlay = function (e) {
  //ternary operator
  video.paused ? video.play() : video.pause();

  //   const method = video.paused ? "play" : "pause";
  //   video[method]();.
};

const updateButtonPlayPause = function () {
  const icon = this.paused ? "▶" : "⏸";
  // console.log(icon);
  toggle.textContent = icon;
};

const skip = function () {
  video.currentTime += parseFloat(this.dataset.skip);
};

const handleRange = function () {
  video[this.name] = this.value;
  // console.log(this.value);
  // console.log(this.name);
};

const handleProgress = function () {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  // console.log(percent);
  // console.log(video.currentTime);
  // console.log(video.duration);
  // console.log(progressBar.style.flexBasis);
};

const handleScrub = function (e) {
  const scrub = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrub;
};

const toggleFullscreen = function (e) {
  // if (!document.fullscreenElement) {
  //   player.requestFullscreen();
  // } else {
  //   document.exitFullscreen();
  // }

  !document.fullscreenElement
    ? player.requestFullscreen()
    : document.exitFullscreen();
};

// Attach event Listener
video.addEventListener("click", togglePlay);

// updating toggle buttons
video.addEventListener("play", updateButtonPlayPause);
video.addEventListener("pause", updateButtonPlayPause);

toggle.addEventListener("click", togglePlay);

// Skip buttons
skipButtons.forEach((button) => button.addEventListener("click", skip));

// Ranges
ranges.forEach((range) => range.addEventListener("change", handleRange));
ranges.forEach((range) => range.addEventListener("mousemove", handleRange));

// Progress bar
video.addEventListener("timeupdate", handleProgress);

progress.addEventListener("click", handleScrub);

// updating handlescrub progressBar
let mousedown = false;
progress.addEventListener("mousemove", (e) => mousedown && handleScrub(e));
progress.addEventListener("mousedown", () => mousedown === true);
progress.addEventListener("mouseup", () => mousedown === false);

fullscreenButton.addEventListener("click", toggleFullscreen);
