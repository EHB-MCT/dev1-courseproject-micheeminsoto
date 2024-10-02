"use strict";

/* alert("Draw your space invader here"); */

drawRectangle();
drawSpaceInvader();

function drawRectangle() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");
	


	context.rect(0, 0, canvas.width,canvas.height);
	context.fillStyle = "#000000";
	context.fill();
}
