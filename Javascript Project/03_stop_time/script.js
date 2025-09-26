let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let timeDisplay = document.getElementById('time');

let hours = 0, minutes = 0, seconds = 0;
let interval = null;

// Start stopwatch
startBtn.addEventListener('click', () => {
    if(interval) return; // prevent multiple intervals
    interval = setInterval(() => {
        seconds++;
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }

        // Format time as HH:MM:SS
        let h = hours < 10 ? '0' + hours : hours;
        let m = minutes < 10 ? '0' + minutes : minutes;
        let s = seconds < 10 ? '0' + seconds : seconds;

        timeDisplay.textContent = `${h}:${m}:${s}`;
    }, 1000);
});

// Stop stopwatch
stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
});

// Reset stopwatch
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timeDisplay.textContent = "00:00:00";
});
