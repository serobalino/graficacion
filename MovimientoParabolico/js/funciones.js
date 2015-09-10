function Dibujar(){
	console.log("Entro a la funcion");
	var angulo = document.getElementById("an").value;
	var velocidad = document.getElementById("ve").value;
	var g=9.8;
	var altura=50;
	var b=800; var a=600;
	angulo=180-angulo;
	angulo=(angulo * Math.PI)/180; //convercion de grados a radianes

	var tiempo =(2*velocidad * Math.sin(angulo))/g;
	var hm =0;
	
	var c = document.getElementById("dibujo");
	var ctx = c.getContext("2d");
	ctx.fillStyle = "#FD0004";//color del dibujo Rojo
	for(var t=0;t<tiempo;t+=0.01){
		var vox = velocidad * Math.cos(angulo);
		var voy = velocidad * Math.sin(angulo);
		var rx =vox*t;
		var ry =(voy*t)-(1/2)*g*t*t;
			if (hm<ry){
				hm=ry;
			}
		console.log("Para el Tiempo "+ t);
		console.log("vox :"+ vox);
		console.log("voy :"+ voy);
		console.log("rx :"+ rx);
		console.log("ry :"+ ry);
		ctx.fillRect(-rx, (a-altura)-ry, 1, 1 );
	}
	ctx.fillStyle = "#6C6E1A";//color del piso Amarillo
	ctx.fillRect(0,a-altura,b,a-altura);//piso
	ctx.stroke();
	document.getElementById("resultado").innerHTML="<br> Tiempo (s) :"+tiempo+"<br>Altura maxima (m) : "+hm;
return false;
}
// JavaScript Document