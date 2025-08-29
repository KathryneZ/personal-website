document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector("header")
    let numberOfClicks = 0;

    const paragraph = document.createElement("p")
    document.body.appendChild(paragraph)
    paragraph.textContent = "0 clicks."

    function onClick() {
        //let numberOfClicks = 0;
        numberOfClicks ++ 
        paragraph.textContent = "OK, I have now received " + (numberOfClicks * 100) + " clicks!"
    }
    
    if (header) {
        header.addEventListener("click", onClick); // Now `header` exists
    } else {
        console.log
}})

//NEW TASK
let slider = document.querySelector("input")
slider.addEventListener("input", function (){
console.log("There is a change of events")
console.log(slider.value)
})

//NEW TASK: control colour
let mySection= document.querySelector("section")

slider.addEventListener("input", function changecolour() {
    let slider = document.querySelector("input")
    let header = document.querySelector("header")
    let grayValue = Math.floor(slider.value * 250)
    header.style.backgroundColor = "rgb(" + grayValue + ", " + grayValue + ", " + grayValue + ")";
})

