let timer;
let seconds = 4;
let isRunning = false;

function startTimer() {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function updateTimer() {
    if (isRunning) {
        seconds--;

        if (seconds <= 0) {
            seconds = 4;
            stopTimer(); // Stop the timer when it resets
        }

        document.getElementById('timer').textContent = seconds;
    }
}
