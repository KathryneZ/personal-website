
// let time = 0
// setInterval(function(){
//     time ++
//     console.log("Time is up, " + time + " seconds have passed.")
// }, 1000)

//we can use this to keep track of time.

let timesRun = 0


const intervalID = setInterval(function(){
    timesRun ++
    console.log("Hello there")
    if(timesRun >= 5) {
        clearInterval (intervalID)
    }
}, 1000)

//stopping intervals. STORE interval as a var.

// setTimeout(function(){
//     clearInterval (intervalID)
// }, 5000)

//why are we adding an anonymous function to call the thing within setInterval

function draw (x,y){
    return x - y;
}
//we can jusr do this 
setInterval(draw, x)


let k = function k(f) {
    console.log(draw==f)
}
k(f) // this will return true