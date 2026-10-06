// Welcome message
console.log("Welcome to Miracle's Website!");

// Change the heading when the button is clicked
function sayHello() {
  document.getElementById("welcome").textContent =
    "Welcome to Miracle's Website!";
}

// Find the button
const button = document.getElementById("changeButton");

// Find the message
const message = document.getElementById("message");

// Find the SVG circle
const circle = document.getElementById("mainCircle");

// Add a click event
button.addEventListener("click", function () {
  message.textContent = "SVG!";

  circle.style.fill = "purple";
});

const button = document.getElementById("changeButton");
const message = document.getElementById("message");
const circle = document.getElementById("mainCircle");

button.addEventListener("click", function () {
  message.textContent = "You interacted with my SVG!";
  circle.style.fill = "Hotpink";
});
