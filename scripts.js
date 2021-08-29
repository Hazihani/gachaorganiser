function countdownTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	h = adjustTime(h);
	m = adjustTime(m);
	s = adjustTime(s);
	document.getElementById('currenttime').innerHTML =  "<h2>Current Time: " + h + ":" + m + ":" + s + "</h2>";

	//Dragalia Lost
	hdl = adjustTime(13 - today.getHours());
	mdl = adjustTime(60 - today.getMinutes());
	sdl = adjustTime(60 - today.getSeconds());
	document.getElementById('dragalialeft').innerHTML = "Remaining Time Left: " + hdl + ":" + mdl + ":" + sdl;

	//Helios: Rising  Heroes & Grand Chase
	hhgc = adjustTime(22 - today.getHours());
	mhgc = adjustTime(60 - today.getMinutes());
	shgc = adjustTime(60 - today.getSeconds());
	hgcstring = "Remaining Time Left: " + hhgc + ":" + mhgc + ":" + shgc;
	document.getElementById('heliosleft').innerHTML = hgcstring;
	document.getElementById('gcleft').innerHTML = hgcstring;

	//Tears of Themis
	htot = adjustTime(2 - today.getHours());
	mtot = adjustTime(60 - today.getMinutes());
	stot = adjustTime(60 - today.getSeconds());
	document.getElementById('totleft').innerHTML = "Remaining Time Left: " + htot + ":" + mtot + ":" + stot;

	setTimeout(startTime, 1000);
}
  
function adjustTime(i) {
	if (i < 0) {i = 24 + i}; 
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}