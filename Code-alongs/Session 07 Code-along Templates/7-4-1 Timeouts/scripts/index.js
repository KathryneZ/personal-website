// Immediate running of function
setTimeout(function() {
    console.log("Immediate: This has run")
})

// Delayed running of function for 3 seconds
setTimeout(function() {
    console.log("3000ms: This has run")
}, 3000)
//no. of milliseconds until this function is run

// Delayed running of function for 5 seconds, but with arguments
setTimeout(function(name, surname){
    console.log("5000ms: hello there, " + name + " " + surname)
}, 5000, "Dennis", "Ang")
// just add aditional arguments to full the argument vars)


const timerId = setTimeout(function() {
    console.log("Too Late!")
}, 5000)

clearTimeout(timerId)
//when we use clear timeouts, even when the time 5s is over, 
// the "too late" should not appear. as timeouts are only run once
//console.log(timerId)