//setting up background
let isDragging = false;
let svgWidth = 600;
let svgHeight = 400;
let draw = SVG().addTo("#svgLocation").size(svgWidth,svgHeight);
let background = draw.rect(600, 400).fill("lightgrey");

//drawing smile
let mouth = draw.path("M 200 250 Q 300 350 400 250").stroke({ //Smile centered at x=300
    width: 2, 
    color: "black" 
}).fill("none");

//draw mouth
function drawMouth(x, y, duration) {
    duration = Math.min(Math.max(duration, 200), 5000);
    let pathNew = [["M", 200, 250], ["Q", x, y, 400, 250]]; //attribute plot()
   
    mouth.animate(duration, '<>').plot(pathNew);
    redDot.animate(duration, '<>').move(x - 5, y - 5);
}

//Animate eyrs
let leftEye = draw.ellipse(50, 25).move(230, 180).fill("black");
let rightEye = draw.ellipse(50, 25).move(330, 180).fill("black");

function animateEyes(state, duration) {
    let newRy = state == "close" ? 2 : 25;
    leftEye.animate(duration, '<>').attr({ ry: newRy });
    rightEye.animate(duration, '<>').attr({ ry: newRy });
}

let smileState = "smile";
let button = document.getElementById("toggleButton");

//creating a toggle button
button.addEventListener("click", function() {
    let duration = 800;
    if (smileState == "smile") {
        button.textContent = "Stop Frowning!";
        button.style.backgroundColor = "pink"; 
        smileState = "frown"; 
        drawMouth(300, 150, duration); 
        animateEyes("close", duration); 
    } else {
        button.textContent = "Stop Smiling!";
        button.style.backgroundColor = "blue"; 
        smileState = "smile"; 
        drawMouth(300, 350, duration);
        animateEyes("open", duration); 
    }
})

//adding interactivity
let redDot = draw.circle(10).fill("red").move(295, 345);
let redDotElement = redDot.node; 
let drawElement = draw.node;


redDotElement.addEventListener("mousedown", function() {
    isDragging = true;
});

drawElement.addEventListener("mouseup", function() {
    isDragging = false;
});

drawElement.addEventListener("mousemove", function(event) {
    if (isDragging === false) { 
        return; 
    }

    let newX = event.offsetX;
    let newY = event.offsetY;
    console.log("Mouse moving:", newX, newY);

    newX = Math.max(220, Math.min(newX, 380)); 
    newY = Math.max(150, Math.min(newY, 350));

    redDot.move(newX - 5, newY - 5); 
    drawMouth(newX, newY, 800); 
});