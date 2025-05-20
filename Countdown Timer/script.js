let countdownInterval = null;
let totalTime = 0;
let timeLeft = 0;
let isPaused = false;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

function updateDisplay() {
  document.getElementById("countdown").textContent = formatTime(timeLeft);

  const progress = document.getElementById("progressBar");
  const percent = totalTime > 0 ? (timeLeft / totalTime) * 100 : 0;
  progress.style.width = percent + "%";

  // Color change
  if (percent <= 25) {
    progress.style.backgroundColor = "#e74c3c"; // Red
  } else if (percent <= 50) {
    progress.style.backgroundColor = "#f1c40f"; // Yellow
  } else {
    progress.style.backgroundColor = "#4caf50"; // Green
  }
}

function startCountdown() {
  if (countdownInterval) return; // Prevent multiple intervals

  if (!isPaused) {
    const inputMinutes = parseInt(document.getElementById("timeInput").value);
    if (isNaN(inputMinutes) || inputMinutes < 1) {
      alert("Please enter a valid time in minutes.");
      return;
    }
    totalTime = inputMinutes * 60;
    timeLeft = totalTime;
    document.getElementById("timeInput").disabled = true;
    updateDisplay();
  }

  isPaused = false;

  countdownInterval = setInterval(() => {
    if (!isPaused && timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdownInterval = null;
      alert("⏰ Time's up!");
      document.getElementById("timeInput").disabled = false;
    }
  }, 1000);
}

function pauseCountdown() {
  isPaused = true;
  clearInterval(countdownInterval);
  countdownInterval = null;
}

function resetCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
  isPaused = false;

  const inputMinutes = parseInt(document.getElementById("timeInput").value);
  totalTime = inputMinutes * 60;
  timeLeft = totalTime;
  document.getElementById("timeInput").disabled = false;
  updateDisplay();
}

// Initial display
window.onload = () => {
  const inputMinutes = parseInt(document.getElementById("timeInput").value);
  totalTime = inputMinutes * 60;
  timeLeft = totalTime;
  updateDisplay();
};
