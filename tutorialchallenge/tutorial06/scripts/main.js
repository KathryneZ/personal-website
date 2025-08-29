// Maps a value x from the interval [a, b] to the interval [m, n]
function map(x, a, b, m, n) {
    let oldRangeWidth = b - a
    let newRangeWidth = n - m
    let proportion = (x - a) / oldRangeWidth // x is "proportion" of the way from a to b
    return m + proportion * newRangeWidth
}
//1. when x = a, When x = a, the function returns m --> lower bound of new range
//2. when x = b, the function returns n --> upper bound
//2. when x is halfway between A and B. midpoint of m and n


//Animation Loop
const svg = SVG().addTo("body").size(600,600);
let smallCircle = svg.circle(10).fill("blue")

let time = 0;
const updateInterval = 100 //smaller value -> faster

function draw(){
    time = time + updateInterval; //or time += updateInterval
    //Actual Animation
    let angle = (time * 2 * Math.PI) / 1000
    console.log(time + "ms has passed.")
    let sinAngle = Math.sin(angle * bouncePerSecond)
    console.log(Math.round(sinAngle))
    let mappedValue = map(sinAngle, -1, 1, 0, 600)
    smallCircle.center(mappedValue, 300)
}

setInterval(function(){
    draw();
}, updateInterval)

//Animation Speed

let bouncePerSecond = 4

