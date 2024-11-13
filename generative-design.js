"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let canvas = document.createElement("canvas");
 

//bedekt de volledige scherm van de canvas 
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

let size = 100; //grootte van de cirkel en halve cirkel
let rows = Math.ceil(canvas.height / size);
let cols = Math.ceil(canvas.width / size);

 
drawPattern();

//functie om het patroon te tekenen
function drawPattern() {
   
    //tekent partroon
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            let x = row * size;
            let y = col * size;

            let shape = Math.random() < 0.5? "circle" : "halfCircle"; // kiest willekeurige vormtype
            let rotation = Math.floor(Math.random() * 4) * Math.PI / 2;
       


            //transformaties uitvoeren, huidige context bijhouden
            context.save();
            context.translate(x + size / 2, y + size / 2);
            context.rotate(rotation);
            context.translate(-size / 2, -size / 2);

            //tekent volledige cirkel
            if(shape == "circle"){  
                context.beginPath();
                context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
                context.fillStyle = '#355e5b'; //kleur
                context.fill();
            } else {  //tekent halve cirkel  
                context.beginPath()
                context.arc(size / 2, size / 2, size / 2, 0,Math.PI);
                context.fillStyle = '#355e5b'; //kleur 
                context.fill();
            }
            context.restore();
        }
   
    }

} 
 
 
 




