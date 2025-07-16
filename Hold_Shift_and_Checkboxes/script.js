const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

// Variable to keep track of the last checked checkbox
// This will be used to determine the range of checkboxes to check when Shift is held down
let lastChecked;

// Function to handle the checkbox click event
const handleCheck = function (e) {
  let inBetween = false;

  // Check if the Shift key is pressed and the checkbox is checked
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("this a inBeetween check");
      }
      // If the checkbox is between the last checked and the current checkbox, check it
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  // If Shift is not pressed, just update the last checked checkbox
  lastChecked = this;
};

// Add event listeners to each checkbox
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

console.log("Hi There");
