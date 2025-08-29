let numbers = [5, 8, 9, -2, 9]
console.log(numbers)

// // Reverse
// numbers.reverse()
// console.log("reversed: " + numbers)

// // Sort
// numbers.sort() //ascending sort
// console.log("sorted: " + numbers)
// numbers.reverse() //this makes it in descending order
// console.log("reversed to be in descending order: " + numbers)

// numbers.sort(function(a,b){
//     if(a < b) {
//         return -1
//     }
//     if(a > b) {
//         return 1
//     }
//     return 0
// })//this is ascending order

// console.log(numbers)
// numbers.sort(function(a,b){
//     if(a < b) {
//         return 1
//     }
//     if(a > b) {
//         return -1
//     }
//     return 0
// })//this is descending order

let myObjects = [ 
    {name: "orange", price: "5"},
    {name: "apple", price: "3"},
    {name: "kiwi", price: "2"},
    {name: "pineapple", price: "9"},
]
//cannot just use .sort


myObject.sort(function(a,b) {
    if(a.price < b.price) {
        return -1
    }
    if(a.price > b.price) {
        return 1
    }
    return 0
})
console.log(myObjects)