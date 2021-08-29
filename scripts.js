function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;

	//Dragalia Lost
	hdl = 13 - today.getHours();
	mdl = 60 - today.getMinutes();
	sdl = 60 - today.getSeconds();
	document.getElementById('dragalialeft').innerHTML = "Remaining Time Left: " + hdl + ":" + mdl + ":" + sdl;

	//Helios: Rising  Heroes & Grand Chase
	hhgc = 22 - today.getHours();
	mhgc = 60 - today.getMinutes();
	shgc = 60 - today.getSeconds();
	hgcstring = "Remaining Time Left: " + hhgc + ":" + mhgc + ":" + shgc;
	document.getElementById('heliosleft').innerHTML = hgcstring;
	document.getElementById('gcleft').innerHTML = hgcstring;

	//Tears of Themis
	htot = checkTime(2 - today.getHours());
	mtot = 60 - today.getMinutes();
	stot = 60 - today.getSeconds();
	document.getElementById('totleft').innerHTML = "Remaining Time Left: " + htot + ":" + mtot + ":" + stot;

	setTimeout(startTime, 1000);
}
  
function checkTime(i) {
	if (i < 0) {i = 24 + i}; 
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}