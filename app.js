const day = document.querySelector(".currentDayOfTheWeek");
const millisecond = document.querySelector(".currentUTCTime");

// Get the current UTC time in milliseconds
const currentUTCTimeInMilliseconds = Date.now();
console.log(currentUTCTimeInMilliseconds);
// Get the current date
const currentDate = new Date();

// Define an array of day names
const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

function updateUTCTime() {
	const currentDate = new Date();
	const utcMilliseconds = currentDate.getUTCMilliseconds();
	const utcSeconds = currentDate.getUTCSeconds();
	const utcMinutes = currentDate.getUTCMinutes();
	const utcHours = currentDate.getUTCHours();

	// Display the time in the format HH:MM:SS.mmm
	const timeString = `${utcHours.toString().padStart(2, "0")}:${utcMinutes
		.toString()
		.padStart(2, "0")}:${utcSeconds
		.toString()
		.padStart(2, "0")}.${utcMilliseconds.toString().padStart(3, "0")}`;

	// Update an HTML element with the time
	document.getElementById("utc-time").textContent = `UTC Time: ${timeString}`;
}

// Update the time every millisecond (you can adjust the interval)
setInterval(updateUTCTime, 1);

// Get the current day of the week (0-6, where 0 is Sunday)
const dayIndex = currentDate.getDay();
// Get the day name based on the index
const currentDay = daysOfWeek[dayIndex];
console.log(`Today is ${currentDay}`);

day.innerHTML = `Today is ${currentDay}`;
millisecond.innerHTML = `The time is ${currentUTCTimeInMilliseconds}`;
