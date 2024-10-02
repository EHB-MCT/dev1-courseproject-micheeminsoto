"use strict";


/* alert("Draw your space invader here"); */


setup();
window.onload = setup;



function setup() {
	drawRectangle(); 
	drawSpaceInvader();
	window.onresize = setup;
}


 function drawRectangle() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");
	
	
	context.rect(0, 0,canvas.width,canvas.height);
	context.fillStyle = "#000000";
	context.fill();
} 
 
function drawSpaceInvader() {
	let canvas = document.querySelector("canvas");
	let context = canvas.getContext("2d");
	
	
	context.beginPath();
	context.fillRect(50,50,50,50);
	context.fillStyle = "#00ff00";
	context.fill();

	context.beginPath();
	context.fillRect(700,200,50,50);
	context.fillStyle = "##00ff00";
	context.fill();

	context.beginPath();
	context.fillRect(600,200,50,50);
	context.fillStyle = "#00ff00";
	context.fill();

	context.beginPath();
	context.fillRect(600,300,150,100);
	context.fill();

	context.beginPath();
	context.fillRect(650,250,50,50);
	context.fill(); 


	

}
