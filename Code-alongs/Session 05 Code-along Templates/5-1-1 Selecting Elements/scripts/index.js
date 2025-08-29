// Select elements by ID
let myParagraph = document.getElementById("myParagraph")
//console.log(myParagraph)

// Select by class
let specialClassElements = document.getElementsByClassName("special")
//console.log(specialClassElements)

// Select by first matching element
let firstHeader = document.querySelector("h2")
let firstParagraph = document.querySelector("p")
//console.log(firstHeader)
//console.log(firstParagraph)

let specialHeader = document.querySelector("h2.special")
//console.log(specialHeader)

// Slect all matching elements
let specialElements = document.querySelectorAll(".special")
console.log(specialElements)