// Creating arrays
let myArray = [10, 20, 30]
console.log("reading entire array: " + myArray)
// Reading array values
console.log("reading first index " + myArray[0])
// Adding items to arrays
myArray[3]
myArray[5]
myArray[0] = 0 //changed the value of the array index 0

//console.log(myArray[4])

myArray.push(70) //adding value to the back of the array
myArray.unshift(-10) //add to the front of the array
console.log(myArray)

// Removing items from arrays
myArray[7] = undefined //this is changing the value of item at index 7 to undefined, but not remove item

let lastItem = myArray.pop() //removes last item from array
let firstItem = myArray.shift() //removes first item from array

console.log(myArray)
console.log("Last Item: " + lastItem)
console.log("First Item: " + firstItem)


myArray.splice(2, 2) //allow us to remove any item from any positionsarray
console.log(myArray)


myArray.splice(1 , 0, 500) //add items from any positions in array

myArray.splice(1 , 3, 999, 998, 997) //remove and add items 
