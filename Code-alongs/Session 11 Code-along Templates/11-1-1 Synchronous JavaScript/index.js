// Create two tasks and show that one runs after another
// In Synchronous JavaScript, the sequence is quite predictable as one task waits for the other.


function firstTask(){
    console.log("first task")
}


function secondTask(){
    console.log("second task")
}

firstTask()
secondTask()

 