let timerInterval;
let seconds = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    updateTimer();
}

function updateTimer() {
    seconds++;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;
}

