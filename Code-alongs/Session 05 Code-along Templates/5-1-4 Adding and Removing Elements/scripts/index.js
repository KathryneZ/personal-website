let unwanted = document.querySelector(".unwanted")
console.log(unwanted)
unwanted.remove()

let section = document.createElement("section")
//console.log(section)
//while we have created the element, we have not yet added this in the doc.

//way 1:
//let body = document.querySelector("body")
//console.log(body)

//way 2: specify parent + appendChild
document.appendChild(section)
section.textContent ="I am a section"

section.appendChild(unwanted)
