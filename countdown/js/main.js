let timerCnt = document.querySelector('.timer__cnt');

let oneSecond = 1000;
let oneMinite = 1000 * 60; // 60 000
let oneHour = 1000 * 60 * 60; // 3 600 000
let oneDay = 1000 * 60 * 60 * 24; // 86 400 000

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minitesEl = document.getElementById('minits');
const secondsEl = document.getElementById('seconds');

function timer() {
	let currentDate = new Date();
	let newYearDate = new Date(2022, 0, 1, 0, 0, 0, 0)
	let dateDiff = newYearDate - currentDate;

	let seconds = Math.floor((dateDiff / 1000) % 60);
	let minites = Math.floor((dateDiff / 60000) % 60);
	let hours = Math.floor((dateDiff / 3600000) % 24);
	let days = Math.floor((dateDiff / 86400000));

	seconds = (seconds < 10) ? `0${seconds}` : seconds;
	minits = (minites < 10) ? `0${minites}` : minites;
	hours = (hours < 10) ? `0${hours}` : hours;
	days = (days < 10) ? `0${days}` : days;

	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours;
	minitesEl.innerHTML = minites;
	secondsEl.innerHTML = seconds;
}

setInterval(() => timer(), 1000);
