// Add this script to your application.js or any JavaScript file loaded in your application

document.addEventListener("turbo:submit-start", function (event) {
  // Start showing progress when form submission starts
  var progressDiv = document.getElementById("progress");
  var progress = 0;
  var interval = setInterval(function () {
    progress += 10; // Increase progress by 10% every second
    progressDiv.textContent = "Progress: " + progress + "%";
    if (progress >= 100) {
      clearInterval(interval); // Stop interval when progress reaches 100%
    }
  }, 1000); // Update progress every second
});

document.addEventListener("turbo:submit-end", function (event) {
  // Clear progress status when form submission ends
  var progressDiv = document.getElementById("progress");
  progressDiv.textContent = ""; // Clear progress status
});
