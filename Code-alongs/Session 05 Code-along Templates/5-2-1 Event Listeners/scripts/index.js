//Following the vid:
let button = document.querySelector("button")
button.addEventListener("click",function() {

})

//or
//let onClick = function () {} //or: 
//function onClick () { console.log("user has clicked")}
//the above is called the "call back function"

//button.addEventListener("click", onClick)
//console.log(button)


//add an event listener to the document itself, 
//so that the entire doc can be read first.
document.addEventListener("DOMContentLoaded", function() {
    //initial display below
    let button = document.querySelector("button")
    let numberOfClicks = 0

    //below is the call back function
    function onClick() {
        console.log("user has clicked")
        numberOfClicks ++ //OR: += 1 OR: numberOfClicks + 1
        paragraph.textContent = "Clicks: " + numberOfClicks
    }
    
    button.addEventListener("click", onClick)

    //demonstrated: create an empty paragraph, 
    //then insert text everytime the user click the button
    const paragraph = document.createElement("p")
    document.body.appendChild(paragraph)
    paragraph.textContent = "Clicks: 0"
    
    console.log(button)
})