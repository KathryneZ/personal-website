//promises promice providers with solutions to 
// handle asychronous functions (value that is not available yet)

//object that represent an eventual completion of operation


// const resolvedPromise = new Promise(function(resolve,reject){
//     resolve("successful operaton")
// })
// const rejectedPromise = new Promise(function(resolve,reject){
//     reject("unsuccessful operaton")
// })

// console.log(resolvedPromise)
// console.log(rejectedPromise)

const promise = new Promise(function(resolve,reject){
    const isSuccessful = false
    if(isSuccessful){
        resolve("YES")
    } else {
        reject("NO")
    } 
})

//basic structure of how we consumer promises
promise
    .then(function(value){
        console.log(value)
    })
    .catch(function(reason){
        console.log(reason)
    })
    .finally(function(){
        console.log("promise is done")
    })

    