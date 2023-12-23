let timerInterval;
let seconds = 4; // 30 seconds timer
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (isTimerRunning) {
        isTimerRunning = false;
        clearInterval(timerInterval);
        resetTimer();
    }
}

function updateTimer() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;

    if (seconds <= 0) {
        stopTimer();
        startTimer(); // Reset the timer to 30 seconds
        return;
    }

    seconds--;
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 4;
    document.getElementById('timer').textContent = '00:30';
}
