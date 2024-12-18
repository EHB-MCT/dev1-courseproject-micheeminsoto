"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let canvas = document.createElement("canvas");
document.body.appendChild(canvas); // Voeg het canvas toe aan de body



canvas.width = 1000; 
canvas.height = 1000; 

let angle = 0;  // begin rotatie
let circlePositions = []; // Array om cirkels op te slaan
canvas.addEventListener("mousemove" , (e) => {
    // Verander de rotatie op basis van de horizontale positie van de muis
    angle = e.pageX / 100; // Verdeel de muis x-positie door 100 om een rotatiehoek te krijgen
});


let size = 100;
let rows = Math.ceil(canvas.height / size);
let cols = Math.ceil(canvas.width / size);

setup(rows, cols, size);  // Setup de cirkels en start de animatie
drawPattern(context, circlePositions);

function setup(rows, cols, size){  // setup cirkels
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            let x = col * size;
            let y = row * size;

            let shape = Math.random() < 0.5? "circle" : "halfCircle";
            let rotation = (Math.floor(Math.random() * 4) * Math.PI) / 2;
            let fillColor = getRandomColor();

            circlePositions.push({type: shape, x: col * size + size / 2, y: row * size + size / 2, size: size, fillColor: fillColor, rotation: rotation,
                dx: Math.random() * 0.1 - 0.5, // random snelheid in x-richting
                dy: Math.random() * 0.5 - 0.25, // random snelheid in y-richting

            });

            




        }
    }
}

function drawCircle(context, x, y, size, fillColor){  // Functie om een cirkel te tekenen
    context.beginPath();
    context.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
    context.fillStyle = fillColor;
    context.fill();
} 

function drawHalfCircle(context, x, y, size, fillColor){  // Functie om een halve cirkel te tekenen
    context.beginPath();
    context.arc(x + size / 2, y + size / 2, size / 2, 0+angle, Math.PI);
    context.fillStyle = fillColor;
    context.fill();
} 

function getRandomColor() {
    return `hsl(${Math.random() * 360}, 100%, 50%)`; //willekeurige HSL kleur
   
}

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

function animate() {  // Functie om de animatie te draaien
    context.clearRect(0, 0, canvas.width, canvas.height); // Wis het canvas

    // Update en teken alle cirkels
    circlePositions.forEach(circle => {
        // Beweeg de cirkels
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Controleer of cirkels de randen van het canvas raken
        if (circle.x - circle.size / 2 < 0 || circle.x + circle.size / 2 > canvas.width) {
            circle.dx *= -1; // Keer om bij het raken van de zijkant
        }
        if (circle.y - circle.size / 2 < 0 || circle.y + circle.size / 2 > canvas.height) {
            circle.dy *= -1; // Keer om bij het raken van de boven- of onderkant
        }

        // Gebruik de muispositie voor rotatie (verander de rotatie per frame)
        circle.rotation = angle;

        // Teken de cirkel (gewoon of halve cirkel)
        drawShape(context, circle);
    });

    // Vraag het volgende frame aan
    requestAnimationFrame(animate);
}

function drawShape(context, circle) {  // Functie om de vormen te tekenen
    context.save();
    context.translate(circle.x, circle.y);
    context.rotate(circle.rotation);

    if (circle.type === "circle") {
        drawCircle(context, 0, 0, circle.size, circle.fillColor);
    } else {
        drawHalfCircle(context, 0, 0, circle.size, circle.fillColor);
    }

    context.restore();
}
















