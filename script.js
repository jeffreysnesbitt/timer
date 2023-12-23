let timerInterval;
let seconds = 2; // 30 seconds timer

function startTimer() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'block';
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    resetTimer();
}

function updateTimer() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;

    if (seconds <= 0) {
        stopTimer();
        return;
    }

    seconds--;
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 30;
    document.getElementById('timer').textContent = '00:00:30';
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('stopButton').style.display = 'none';
}


