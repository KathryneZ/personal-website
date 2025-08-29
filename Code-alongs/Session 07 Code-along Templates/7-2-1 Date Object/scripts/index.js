//console.log(Date.now())
// Date.now(): This prodides us with the represenattion of the current time 
// Date type: Number
// Represents the number of milliseconds
// > since Jan 1, 1970.

const thenMillis = Date.now() // 10000
// Here we run a reries of lines of code
// Which will take some time
// ... wait until user presses a button
const nowMillis = Date.now() // 16000
const differenceMillis = now - then // 16000 - 10000 = 6000ms

// We can give users different feedback with this difference.

console.log(differenceMillis)


