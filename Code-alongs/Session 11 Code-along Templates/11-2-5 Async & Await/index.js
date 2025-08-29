//const promise = new Promise(function(resolve, reject){
//     resolve("task completed")
// })

// promise.then(function(value){
//     console.log(value)
//     myVar = value
// })
// console.log(myVar)

//  async function task (){
//     return "task completed"
//  }

//  const result = await task ()
//  console.log(result)


async function taskOne() {
    return "task 1 completed"
}

async function taskTwo() {
    return "task 1 completed"
}
async function taskThree() {
    return "task 1 completed"
}
async function taskFour() {
    return "task 1 completed"
}
async function taskFive() {
    return "task 1 completed"
}
async function allTasks() {
const resultOne = await taskOne()
const resultTwo = await taskOne()
const resultThree = await taskOne()
const resultFour = await taskOne()
const resultFive = await taskOne()
return [resultOne, resultTwo, resultThree, resultFour, resultFive]
}

allTasks().then(console.log)
// console.log(resultOne)
// console.log(resultTwo)
// console.log(resultThree)
// console.log(resultFour)
// console.log(resultFive)

