const myImage = document.getElementById("myImage")
const mySVG = document.getElementById("mySVG")
console.log(mySVG)
const myCircle = mySVG.querySelector('circle')
myCircle.style.fill = "yellow"
myCircle.setAttribute("r", 70) //function setAttribute - string representing attribute to change, adnn value.
