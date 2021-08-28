function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
	//document.getElementById('dragalialeft').innerHTML = "Remaining Time Left: ";
	document.getElementById('dragalialeft').innerHTML = "Remaining Time Left: " + (14-h) + ":" + (60-m) + ":" + (60-s);
	setTimeout(startTime, 1000);
}
  
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}