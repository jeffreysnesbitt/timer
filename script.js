let timerInterval;
let seconds = 0;
let selectedTimer = 2; // Default timer duration in seconds
let rangeCombinationIndex = 0;
const rangeCombinations = ["1-2", "1-3", "1-4", "2-3", "2-4", "2-1", "3-4", "3-1", "3-2", "4-1", "4-2", "4-3"];

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
        toggleRangeCombination();
        startTimer(selectedTimer);
        return;
    }

    seconds--;
}

function toggleRangeCombination() {
    rangeCombinationIndex = (rangeCombinationIndex + 1) % rangeCombinations.length;
    const rangeButton = document.getElementById('rangeButton');
    rangeButton.textContent = rangeCombinations[rangeCombinationIndex];
}



