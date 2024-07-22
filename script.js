const pomodoroTime = document.getElementById("pomodoro-time");
const startBtn = document.getElementById("start");
let intervalId;
let currentTime = 25 * 60;

function updateTimer() {
    const minutes = Math.floor(currentTime / 60).toString().padStart(2, "0");
    const seconds = (currentTime % 60).toString().padStart(2, "0");

    pomodoroTime.textContent = `${minutes}:${seconds}`;

    if (currentTime <= 0) {
        clearInterval(intervalId);
        pomodoroTime.textContent = `25:00`;
        startBtn.textContent = "start";
    } else {
        currentTime--;
    }
}

function startTimer() {
    if (startBtn.textContent === "start") {
        startBtn.textContent = "stop";
        intervalId = setInterval(updateTimer, 100);
    } else {
        startBtn.textContent = "start";
        clearInterval(intervalId);
    }
}

startBtn.addEventListener("click", startTimer);