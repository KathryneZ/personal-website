//let myParagraph = document.querySelector("p")
//let content = myParagraph.textContent
//content = "I am now excited!"
//myParagraph.textContent = content
//console.log(content)

//let myParagraph = document.querySelector("p")
//myParagraph.textContent = "I am now excited!"
//console.log(myParagraph)


//if the element contain any child content, it may be overwritten (eg, the span within the para is not displayed.

let myParagraph = document.querySelector("p")
myParagraph.innerHTML = "<span>I am now excited!</span>"
console.log(myParagraph)