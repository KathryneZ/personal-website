// For Each
const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(function(value){
// value++
// console.log(value)
// })
// console.log(numbers)// the original value stays the same despite us incrementing the value reference within "for each"
// //does not modify original value

// numbers.forEach(function(value, index){
//     numbers[index] = value + 1
//     console.log(value)
//     })
//     console.log(numbers)

// Map 
const newNumbers = numbers.map(function(value){
    return value + 1
})
// console.log(numbers)
// console.log(newNumbers)

// Filter
const filtered = numbers.filter(function(value){
    return value < 4 || value == 5
})
// console.log(numbers)
// console.log(filtered)

// Reduce
const reducedValue = numbers.reduce(function(previousValue, currentValue){
    return previousValue + currentValue
}, " "//or 0 (the second argument which represents the initial value)
)


