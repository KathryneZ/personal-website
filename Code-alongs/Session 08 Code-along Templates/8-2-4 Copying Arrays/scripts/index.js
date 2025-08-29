let roster = [
    {name: "Dennis"},
    {name: "Danny"},
    {name: "Denise"}
]

let numbers = [4,7,4,8,3]
let copiedNumbers = numbers.slice()

copiedNumbers(2) = 999
console.log(numbers)
console.log(copiedNumbers)

let copiedRoster = roster.slice()
//copiedRoster[1].name = "Bob" //update both roster and copiedRoster
copiedRoster[1].name = {name: "Bob"} //to update the new copiedRoster, we have to creat an entirely new object.

console.log(roster)
console.log(copiedRoster)