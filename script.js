// Live Clock + Alarm
let alarmTime = null;

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const currentTime = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").textContent = currentTime;

  if (alarmTime === `${hours}:${minutes}` && seconds === "00") {
    alert("⏰ Alarm Ringing!");
    clearAlarm(); // Optional: clear after ringing once
  }
}
setInterval(updateClock, 1000);

function setAlarm() {
  const input = document.getElementById("alarmTime").value;
  if (!input) {
    alert("Please enter a valid time.");
    return;
  }
  alarmTime = input;
  document.getElementById("alarmStatus").textContent = `Alarm set for ${alarmTime}`;
}

function clearAlarm() {
  alarmTime = null;
  document.getElementById("alarmStatus").textContent = "Alarm cleared.";
}

// Countdown Timer
let timer;
let totalSeconds = 0;

function startTimer() {
  const input = parseInt(document.getElementById("timerInput").value);
  if (isNaN(input) || input <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }

  totalSeconds = input;
  updateTimerDisplay();

  timer = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      alert("⏳ Timer finished!");
      return;
    }
    totalSeconds--;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function updateTimerDisplay() {
  const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const secs = (totalSeconds % 60).toString().padStart(2, '0');
  document.getElementById("timerDisplay").textContent = `${mins}:${secs}`;
}
