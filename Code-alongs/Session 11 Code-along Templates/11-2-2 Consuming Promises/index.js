//Creating tasks and ensuring that theu are called one after another

function taskOne(){
    new Promise(function(resolve, reject){
        setTimeout(function (){
            resolve("Task one is complete")
        },Math.random() * 1000)
    })
}

function taskTwo(){
    new Promise(function(resolve, reject){
        setTimeout(function (){
            resolve("Task two is complete")
        },Math.random() * 1000)
    })
}

function taskThree(){
    new Promise(function(resolve, reject){
        setTimeout(function (){
            resolve("Task three is complete")
        },Math.random() * 1000)
    })
}

function taskFour(){
    new Promise(function(resolve, reject){
        setTimeout(function (){
            resolve("Task four is complete")
        },Math.random() * 1000)
    })
}

function taskFive(){
    new Promise(function(resolve, reject){
        setTimeout(function (){
            resolve("Task five is complete")
        },Math.random() * 1000)
    })
}
function customMessageLogger(value) {
    console.log("success" + value)
}

taskOne()
    .then(ccustomMessageLogger)
    .then(taskTwo)
    .then(customMessageLogger)
    .then(taskThree)
    .then(customMessageLogger)
    .then(taskFour)
    .then(customMessageLogger)
    .then(taskFive)
    .then(console.log)
    .finally(function (){
        console.log("all five tasks are done.")
    })