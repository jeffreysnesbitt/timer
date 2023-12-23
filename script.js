let timer;
let seconds = 4;
let isRunning = false;
let buttonText = '1-2';

function setTimer(timerValue) {
    seconds = timerValue;
    document.getElementById('timer').textContent = seconds;
}

function resetTimer() {
    seconds = 4;
    document.getElementById('timer').textContent = seconds;
}

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
            seconds = buttonText.startsWith('2') ? 4 : 2;
            stopTimer();
            changeButtonText();
        }

        document.getElementById('timer').textContent = seconds;
    }
}


function changeButtonText() {
    const startButton = document.getElementById('startButton');

    switch (buttonText) {
        case '1-2':
            buttonText = '1-3';
            break;
        case '1-3':
            buttonText = '1-4';
            break;
        case '1-4':
            buttonText = '2-3';
            break;
        case '2-3':
            buttonText = '2-4';
            break;
        case '2-4':
            buttonText = '2-1';
            break;
        case '2-1':
            buttonText = '3-4';
            break;
        case '3-4':
            buttonText = '3-1';
            break;
        case '3-1':
            buttonText = '3-2';
            break;
        case '3-2':
            buttonText = '4-1';
            break;
        case '4-1':
            buttonText = '4-2';
            break;
        case '4-2':
            buttonText = '4-3';
            break;
        case '4-3':
            buttonText = '1-2';
            break;
    }

    startButton.textContent = buttonText;
}
