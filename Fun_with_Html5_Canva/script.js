const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the stroke style and other properties for the canvas context
context.fillStyle = "#F3F3F3";
context.strokeStyle = "#FF3F33";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 20;

// Variables to control drawing state
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = 0;

// Function to draw on the canvas
// It will be called on mouse move
const draw = function (e) {
  if (!isDrawing) return; //stop the function from running
  console.log(e);

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  // start from
  context.moveTo(lastX, lastY);
  // go to
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  // Change line width based on the direction of drawing
  // If line width is greater than or equal to 500 or less than or equal to 1, reverse the direction
  // This creates a pulsating effect on the line width
  if (context.lineWidth >= 500 || context.lineWidth <= 1) {
    direction = !direction;
  }

  // Increase or decrease line width based on the direction
  // If direction is true, increase line width; otherwise, decrease it
  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
};

// Event listeners for mouse actions

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
