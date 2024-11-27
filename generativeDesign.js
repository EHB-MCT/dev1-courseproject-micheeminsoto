"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let canvas = document.createElement("canvas");

canvas.width = 1000; 
canvas.height = 1000; 

let size = 100;
let rows = Math.ceil(canvas.height / size);
let cols = Math.ceil(canvas.width / size);

drawPattern(context, rows, cols, size);

function drawCircle(context, x, y, size, fillColor){
    context.beginPath();
    context.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
    context.fillStyle = fillColor;
    context.fill();
} 

function drawHalfCircle(context, x, y, size, fillColor){
    context.beginPath();
    context.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI);
    context.fillStyle = fillColor;
    context.fill();
} 

function drawPattern(context, rows, cols, size){
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            let x = col * size;
            let y = row * size;

            let shape = Math.random() < 0.5? "circle" : "halfCircle";
            let rotation = (Math.floor(Math.random() * 4) * Math.PI) / 2;

            context.save();
            context.translate(x + size / 2, y + size / 2);
            context.rotate(rotation);
            context.translate(- size / 2, - size / 2);

            if(shape == "circle"){
                drawCircle(context, 0, 0, size, `hsl(${Math.random() * 360}, 100%, 50%)`);
           
            } else{
                drawHalfCircle(context, 0, 0, size, "#355e5b");
            }

            context.restore();
        }
    }
} 



 





   








