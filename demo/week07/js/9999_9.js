/* 
 * Function: JavaScript form validation
 * Student ID: 026699999999-9
 * Author: Chumpol Mokarat
 */
function copyText(){
	// Coding starts here.
	let aTxt = document.getElementById('myTxt1').innerHTML;
	document.getElementById('myTxt2').innerHTML = aTxt;
}

function clearText(){
	document.getElementById('myTxt2').innerHTML = "";
}

function controlLight(state){
	let img = document.getElementById('myImg1');
	if(state == 1){
		img.src = "images/christmas-lon.png";
	}else{
		img.src = "images/christmas-loff.png";
	}
}

function changeFont(fs){
	document.getElementById('myWeb').style.fontSize = fs;
}

function changeBg(cl){
	document.getElementById('myWeb').style.backgroundColor = cl;
}

function calculate(){
	let p_price = document.getElementById('prodPriceId').value;
	let p_vat = document.getElementById('prodVatId').value;
	let p_vp = 0.0;
	let p_total = 0.0;

	// parseInt
	p_price = parseFloat(p_price);
	p_vat = parseFloat(p_vat);

	// Please check again!
	if(isNaN(p_price) || isNaN(p_vat)){
		alert("กรุณากรอกข้อมูลก่อนคำนวณ!");
		return false;
	}

	// x = (p*v)/100
	// y = p + x
	p_vp = (p_price * p_vat)/100;
	p_total = p_price + p_vp;

	//alert("Total Price: "+p_total);

	// Output: ...
	document.getElementById('outTotalPrice').innerHTML = p_total;

}
