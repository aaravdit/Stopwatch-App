let timerId;
let time = 0;

function updateDisplay() {
	const minutes = Math.floor(time / 60000);
	const seconds = Math.floor((time % 60000) / 1000);
	const milliseconds = time % 1000;

	const display = document.querySelector('.display');
	display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

function start() {
	timerId = setInterval(() => {
		time += 1;
		updateDisplay();
	}, 1);
}

function stop() {
	clearInterval(timerId);
}

function reset() {
	stop();
	time = 0;
	updateDisplay();
}

document.querySelector('.start').addEventListener('click', start);
document.querySelector('.stop').addEventListener('click', stop);
document.querySelector('.reset').addEventListener('click', reset);