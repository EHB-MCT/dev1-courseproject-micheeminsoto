"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let canvas = document.createElement("canvas");

canvas.width = 1000; 
canvas.height = 1000; 

let angle = 0;
let circlePositions = []; // Array om cirkels op te slaan

let size = 100;
let rows = Math.ceil(canvas.height / size);
let cols = Math.ceil(canvas.width / size);


setup(rows, cols, size);
drawPattern(context, circlePositions);

/* drawPattern(context, rows, cols, size); */

function setup(rows, cols, size){
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            let x = col * size;
            let y = row * size;

            let shape = Math.random() < 0.5? "circle" : "halfCircle";
            let rotation = (Math.floor(Math.random() * 4) * Math.PI) / 2;
            let fillColor = getRandomColor();

            circlePositions.push({type: shape, x, y, size, fillColor, rotation})

        }
    }
}


function drawCircle(context, x, y, size, fillColor){
    context.beginPath();
    context.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
    context.fillStyle = fillColor;
    context.fill();
} 

function drawHalfCircle(context, x, y, size, fillColor){
    context.beginPath();
    context.arc(x + size / 2, y + size / 2, size / 2, 0+angle, Math.PI+ angle);
    context.fillStyle = fillColor;
    context.fill();
} 



function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`; // Willekeurige HSL kleur
    // return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`; // Willekeurige Hex kleur
}



/* function drawPattern(context, rows, cols, size){
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
 */
           /*  if(shape == "circle"){
                drawCircle(context, 0, 0, size, `hsl(${Math.random() * 360}, 100%, 50%)`);
               /*  circlePositions.push({ type: "circle", x, y, size, fillColor, rotation});
 */
               /*  circlePositions.push({type: "circle", x: 100, y: 200, size: 100, fillColor: "hsl(170, 100%, 50%)" ,rotation: 0 })
                 */
 

          /*   } else{
                drawHalfCircle(context, 0, 0, size, "#355e5b");
               /*  circlePositions.push({type: "halfCircle", x, y, size, fillColor, rotation}); */
/* 
               circlePositions.push({type: "halfCircle", x: 100, y: 200, size: 100, fillColor: "hsl(120, 100%, 50%)" ,rotation: 0})

 */
          /*   } */

          /*   context.restore(); */ 
/*         }
    }
}  */

    function drawPattern(context, circlePositions){
        circlePositions.forEach(circle => {
        context.save();
        context.translate(circle.x + circle.size / 2, circle.y + circle.size / 2);
        context.rotate(circle.rotation);
        context.translate(-circle.size / 2, -circle.size / 2);

        if (circle.type === "circle") {
            drawCircle(context, 0, 0, circle.size, circle.fillColor);
        } else {
            drawHalfCircle(context, 0, 0, circle.size, circle.fillColor);
        }

        context.restore();

       });

    }


    

//mousemove
/* angle = e.pageX / 100 */

 




   








