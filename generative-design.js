"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";



 drawPattern();

function drawPattern() {
    let canvas = document.createElement("canvas");
    let context = canvas.getContext('2d');

    let width = 500;
    let height = 500;
    canvas.width = width;
    canvas.height = height;

    document.body.appendChild(canvas);

    


let size = 50;

let rows = Math.ceil(hei);
let cols = 16;


    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            let x = row * size;
            let y = col * size;

            let shape = Math.random() < 0.5? "circle" : "halfCircle";
            let rotation = Math.floor(Math.random() * 4) * Math.PI / 2;

            context.save();
            context.translate(x + size / 2, y + size / 2);
            context.rotate(rotation);
            context.translate(-size / 2, -size / 2);

            if(shape == "circle"){  
                context.beginPath();
                context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
                context.fillStyle = '#355e5b'; // Donkergroene kleur
                context.fill();
            } else {   
                context.beginPath()
                context.arc(size / 2, size / 2, size / 2, 0,Math.PI);
                context.fillStyle = '#355e5b'; // Donkergroene kleur
                context.fill();
            }

            context.restore();
        }
    }
} 



 













 

















