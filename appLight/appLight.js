function flipswitch() {
	var light = document.getElementById("switcher");
	if(light.style.cssFloat == "") {
		light.style.cssFloat = "left";
		document.body.style.backgroundColor = "black";
		document.getElementById("position").innerHTML = "OFF";
	}
	if(light.style.cssFloat == "right"){
		light.style.cssFloat="left";
		document.body.style.backgroundColor = "black";
		document.getElementById("position").innerHTML = "OFF";
    document.getElementById("position").style.color ="black";
		document.getElementById("position").style.cssFloat ="right";
	}else{
		light.style.cssFloat="right";
		document.body.style.backgroundColor = "white";
		document.getElementById("position").innerHTML = "ON";
    document.getElementById("position").style.color ="white";
		document.getElementById("position").style.cssFloat ="left";
	}
}
