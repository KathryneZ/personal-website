// Unstable tasks?!

function taskOne(){
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            if(Math.random() <= 0.5) {
                resolve("Task one complete")
            } else {
                reject("Task one failed")
            }
        }, Math.random() * 1000)
    })
}

// taskOne().then(console.log)
// //need to return the new promise 


function taskTwo(){
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            if(Math.random() <= 0.5) {
                resolve("Task two complete")
            } else {
                reject("Task two failed")
            }
        }, Math.random() * 1000)
    })
}


function taskThree(){
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            if(Math.random() <= 0.5) {
                resolve("Task three complete")
            } else {
                reject("Task three failed")
            }
        }, Math.random() * 1000)
    })
}


function taskFour(){
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            if(Math.random() <= 0.5) {
                resolve("Task four complete")
            } else {
                reject("Task four failed")
            }
        }, Math.random() * 1000)
    })
}

// const promises = [
// taskOne().then(console.log).catch(control.log),
// taskTwo().then(console.log).catch(control.log),
// taskThree().then(console.log).catch(control.log),
// taskFour().then(console.log).catch(control.log),
// taskFive().then(console.log).catch(control.log)
// ]// at the end of the day it will just gove us a promise

// Promise.all(promises).then(function(){
//     console.log("All tasks are complete.")
// })
// console.log(promises)

Promise.race(promises).then(function (value){
    console.log(value)
})

const promises = [
    taskOne(),
    taskTwo(),
    taskThree(),
    taskFour(),
    taskFive()
    ]// at the end of the day it will just gove us a promise
    
    Promise.all(promises).then(function(){
        console.log("All tasks are complete.")
    })
    console.log(promises)
    
    
