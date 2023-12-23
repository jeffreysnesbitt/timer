let timerInterval;
let seconds = 0;
let selectedTimer = 30; // Default timer duration in seconds
let rangeToggle = true;

function startTimer(duration) {
    selectedTimer = duration;
    seconds = duration; // Set initial seconds to the specified duration
    updateTimer(); // Update the displayed timer immediately
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    seconds = 0; // Reset the timer when stopped
    updateTimer(); // Update the displayed timer immediately
}

function updateTimer() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;

    if (seconds <= 0) {
        stopTimer();
        alert("Timer complete!"); // You can customize the action when the timer completes
        return;
    }

    seconds--;
}

function changeRange() {
    rangeToggle = !rangeToggle;
    const rangeButton = document.getElementById('rangeButton');
    rangeButton.textContent = rangeToggle ? "1-2" : "1-3";
}
