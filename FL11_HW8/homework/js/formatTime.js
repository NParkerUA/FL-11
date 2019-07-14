function FormatTime(Minutes) {
	const HOUR = 60;
	const DAY = 1440;
    
	const DAYS = Math.trunc(Minutes / DAY);
	Minutes -= DAY * DAYS;
	const HOURS = Math.trunc(Minutes / HOUR);
	Minutes -= HOUR * HOURS;

	return (DAYS + " day(s), " + HOURS + " hour(s), " + Minutes + " minute(s).");
}

console.log(FormatTime(240));
console.log(FormatTime(30));
console.log(FormatTime(44444));