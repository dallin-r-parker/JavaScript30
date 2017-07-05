const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
	const now = new Date();

	const sec = now.getSeconds()
	const secDegrees = ((sec / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secDegrees}deg)`

	const min = now.getMinutes()
	const minDegrees = ((min / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`

	const hr = now.getHours()
	const hrDeegrees = ((hr / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hrDeegrees}deg)`
}

setInterval(setDate, 1000)
