const newyears = '1 Jan 2021'

const daysElement = document.getElementById('days')
const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

function countdown() {
	const newYearsDate = new Date(newyears)
	const currentDate = new Date()

	const totalSeconds = (newYearsDate - currentDate) / 1000

	const days = Math.floor(totalSeconds / 3600 / 24)
	const hours = Math.floor(totalSeconds / 3600) % 24
	const minutes = Math.floor(totalSeconds / 60) % 60
	const seconds = Math.floor(totalSeconds) % 60

	daysElement.innerHTML = days
	hoursElement.innerHTML = hours
	minutesElement.innerHTML = minutes
	secondsElement.innerHTML = seconds
}

countdown()

setInterval(countdown, 1000)