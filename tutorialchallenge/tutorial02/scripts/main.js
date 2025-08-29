let output = "Welcome message"

function calculateDifference (x,y) {
    console.log("I am in a function") 
    let result = x - y
    return result
}

let difference = calculateDifference (10,5)
console.log(difference)

//
let x = 10
let y = 5

let sentence = 
"The difference between " + x + " and " + y + " is " + difference + "." 
let newOutput = output + "\n"+ sentence
console.log(newOutput)

//
function operations (a,b) {
    return {
    sum: a + b,
    difference: a - b, 
    product: a * b
    };
}

let operationResults = operations (8,2)
let formattedOutput = "Sum is " + operationResults.sum + "\n" + "Difference is " + operationResults.difference + "\n" + "Product is " + operationResults.sum
let newNewOutput = newOutput + "\n" + formattedOutput 
console.log(newNewOutput)

//LAST TASK
const point1 = { x: 6, y: 3 };
const point2 = { x: 4, y: 0 };

function pointSum(point1, point2) {
    return {
        x: point1.x + point2.x,
        y: point1.y + point2.y
    };
}

let summedPoint = pointSum(point1, point2);
let lastOutput = "The sum of the two points is " + JSON.stringify(summedPoint)
console.log(lastOutput)
let finalOutput = newOutput + "\n" + formattedOutput + "\n" + lastOutput
console.log(finalOutput)
