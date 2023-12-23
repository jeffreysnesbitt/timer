let timerInterval;
let seconds = 0;
let selectedTimer = 2; // Default timer duration in seconds (changed for debugging)

function startTimer(duration) {
    selectedTimer = duration;
    document.getElementById('timerOptions').style.display = 'none';
    document.getElementById('startButton').textContent = `Start`;
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('stopButton').style.display = 'block';
}

function startTimerWithToggle() {
    document.getElementById('startButton').style.display = 'none';
    seconds = selectedTimer; // Set initial seconds to the specified duration
    updateTimer(); // Update the displayed timer immediately
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    seconds = 0; // Reset the timer when stopped
    updateTimer(); // Update the displayed timer immediately
    document.getElementById('timerOptions').style.display = 'block';
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('stopButton').style.display = 'none';
}

function updateTimer() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;

    if (seconds <= 0) {
        stopTimer();
        document.getElementById('startButton').textContent = `Start`;
        document.getElementById('startButton').style.display = 'block';
        return;
    }

    seconds--;
}

