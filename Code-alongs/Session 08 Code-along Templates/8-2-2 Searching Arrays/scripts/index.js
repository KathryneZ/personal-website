let numbers = [6, 9, 2, 1, 1]
console.log(numbers)

// Test if exists
console.log(numbers.includes(2)) // Exists
console.log(numbers.includes(1)) // Does not exist

// Testing for some
console.log(numbers.some(function(value //, index, array
    ) {
    return value > 100
})) //if one adheres to the condition, will always return true.

// Testing for all
console.log(numbers.every(function(value) {
    return value > 0
}))

// Find index
console.log(numbers.findIndex(function(value) {
    return value == 9
}))

console.log(numbers.findLastIndex(function(value) {
    return value == 9
}))

console.log(numbers.indexOf(1))

// Find value
console.log(numbers.find(function(value, index) {
    return value > 1 && index > 2
}))
