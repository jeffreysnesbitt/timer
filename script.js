let timer;
let seconds = 4;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimer() {
    seconds--;

    if (seconds <= 0) {
        seconds = 4;
    }

    document.getElementById('timer').textContent = seconds;
}

