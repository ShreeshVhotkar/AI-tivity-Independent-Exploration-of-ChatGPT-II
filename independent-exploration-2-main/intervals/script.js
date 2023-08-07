// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

// function to update the time and display it
function updateTime() {
  time++;
  counterElement.textContent = time;
}

// call the updateTime function every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);
