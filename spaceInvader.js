"use strict";
window.onresize = drawSpaceInvader;
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawRectangle();
drawSpaceInvader();

function drawRectangle() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");
	window.onresize = drawRectangle;

	context.beginPath();
	context.rect(100, 100, 300, 300);
	context.fill();
}

function drawSpaceInvader() {
	context.beginPath();
	context.rect(180, 150, 50, 50);
	context.fillStyle = "#00ff00";
	context.fill();

	context.beginPath();
	context.rect(280, 150, 50, 50);
	context.fillStyle = "#00ff00";
	context.fill();

	context.beginPath();
	context.rect(230, 200, 50, 50);
	context.fillStyle = "#00ff00";
	context.fill();

	context.beginPath();
	context.rect(180, 250, 150, 100);
	context.fillStyle = "#00ff00";
	context.fill();
}
