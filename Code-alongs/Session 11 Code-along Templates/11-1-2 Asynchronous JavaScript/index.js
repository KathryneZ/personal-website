// Create two tasks and show that one runs after another
// In Asynchronous JavaScript, the tasks will not wait for each other.

function firstTask(){
    setTimeout(function(){
        console.log("first task")
    }, 1000)
}


function secondTask(){
    console.log("second task")
}

firstTask()
secondTask()


