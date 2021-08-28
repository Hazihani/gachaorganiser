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

	//Dragalia Lost
	hdl = 14 - today.getHours();
	mdl = 60 - today.getMinutes();
	sdl = 60 - today.getSeconds();
	document.getElementById('dragalialeft').innerHTML = "Remaining Time Left: " + hdl + ":" + mdl + ":" + sdl;
	
	setTimeout(startTime, 1000);
}
  
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}