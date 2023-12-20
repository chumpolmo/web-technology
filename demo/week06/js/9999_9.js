/* 
 * Function: JavaScript form validation
 * Student ID: 026699999999-9
 * Author: Chumpol Mokarat
 */
function copyText(){
	// Coding starts here.
	let txt1 = document.getElementById('txt01').innerHTML;
	document.getElementById('txt02').innerHTML = txt1;
}

function onOffLamp(state){
	if(state == 1){
		document.getElementById('lamp').src = "images/light-bulb-on.png";
	}else{
		document.getElementById('lamp').src = "images/light-bulb-off.png";
	}
}

function changeFont(fn){
	document.getElementById('myWeb').style.fontSize = fn;
}

function changeBg(bg){
	document.getElementById('myWeb').style.backgroundColor = bg;
}

function calculateVat(){
	let pdPrice = document.getElementById('prodPrice').value;
	let pdVat = document.getElementById('prodVat').value;
	let resVat = 0.0;
	let resTotalPrice = 0.0;
	resVat = (parseFloat(pdPrice) * parseFloat(pdVat))/100;
	resTotalPrice = parseFloat(pdPrice) + parseFloat(resVat);

	//alert("ราคารวมภาษี "+resTotalPrice);

	// ...
	document.getElementById('resPrice').innerHTML = parseFloat(pdPrice);
	
}
