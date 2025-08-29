// // Create five tasks and ensure they run one after another
// function firstTask(){
//     setTimeout(function(){
//         console.log("first task")
//         //secondTask
//     }, Math.random()*1000)
// }

// function secondTask(){
//     setTimeout(function(){
//         console.log("second task")
//         //thirdTask
//     }, Math.random()*1000)
// }


// function thirdTask(){
//     setTimeout(function(){
//         console.log("third task")
//         //sourthTask
//     }, Math.random()*1000)
// }

// function fourthTask(){
//     setTimeout(function() {
//         console.log("fourth task")
//         //fifthTask
//     }, Math.random()*1000)
// }

// function fifthTask(){
//     setTimeout(function(){ 
//         console.log("fifth task")
//         //firstTask
//     }, Math.random()*1000)
// }

// firstTask()
// secondTask()
// thirdTask()
// fourthTask()
// fifthTask()


//OR:
setTimeout(function(){
    console.log("first task")
    setTimeout (function(){
        console.log("second task")
        setTimeout(function(){
            console.log("third task")
            setTimeout(function(){
                console.log("fourth task")
                setTimeout(function(){
                    console.log("fifth task")
                }, Math.random()*1000)
            }, Math.random()*1000)
        }, Math.random()*1000)
    }, Math.random()*1000)
}, Math.random()*1000)