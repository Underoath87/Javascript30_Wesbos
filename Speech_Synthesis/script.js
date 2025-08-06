const msg = new SpeechSynthesisUtterance();

let voices = [];

const voicesDropDown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

const populateVoices = function () {
  voices = this.getVoices();
  // console.log(voices);

  voicesDropDown.innerHTML = voices
    .filter((voice) => voice.lang.includes("en"))
    .map((voice) => {
      return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
    })
    .join("");
};

const setVoice = function () {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
  console.log(msg.voice);
};

const toggle = function (startOver = true) {
  speechSynthesis.cancel();

  if (startOver) {
    speechSynthesis.speak(msg);
  }
};

const setOption = function () {
  //   console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
};

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropDown.addEventListener("change", setVoice);
options.forEach((option) => option.addEventListener("change", setOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
