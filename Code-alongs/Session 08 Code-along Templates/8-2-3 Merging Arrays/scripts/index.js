let a = [1,2,3]
let b = ["a","b","c"]


console.log(" " + a)
console.log(a + b) // they are coerced into strings (1,2,3a,b,c)

console.log(a.concat(b)) //this will merge the two arrays, with both a and b remain untouched

let c = a.concat(b)
let d = b.concat(a)
console.log(a)
console.log(b)
console.log(c)
console.log(d)