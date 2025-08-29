const output = document.querySelector("output")

//adding the DOMcontentloader
document.addEventListener("DOMContentLoaded", onLoad)
function onLoad () {
    const output = document.querySelector(".output")
    console.log(output)
}

//IF STATEMENT
//if condition is true (condition in bracket), the content in curly bracket will run

if(false) {
    console.log("consition is true")
}
if(true) {
    console.log("consition is true")
}

//let counter = 1
let x = 5
if(counter == 0) {
    console.log("consition is zero")
}

if(counter == 1) {
    console.log("consition is one")
}

if(counter <=1) {
    console.log("Counter is ,=1")
}
//when more than one if statements are true, both will run with the "and" operator, both must be true to run
if(counter == 1 && x == 5) {
    console.log("Counter is 1 and x is 5")
}
//"or" operator - only one needs to be true
if(counter == 0 || x == 5) {
    console.log("Counter is 0 and x is 5")
}

//both are false, hence this won't run
if(counter == 0 || x == 4) {
    console.log("Counter is 0 and x is 5")
}

//IF ELSE STATEMENT
if(false) {
   console.log("value is true")
} else {
    console.log("value is false")
}
//eg:
let raining = true
if(raining) // or if (raining == true)
{
    output.textContent = "Bring an umbrella!"
 } else {
     output.textContent = "Skies are clear!"
 }

//IF ELSE IF STATEMENT
//let counter = 2
if(counter <= 2) {
    console.log("Counter <= 2")
 } else if (counter <= 3) {
    console.log("Counter <= 3")
 }

 //else if will only run when the front is not true
 //else ifs can chain multiple else ifs, but we cant chain multiple else.
 //we can chain an else, after an 'if else if' statement.

 //let counter = 3
 if(counter == 1) {
     console.log("Counter == 1")
  } else if(counter == 2) {
     console.log("Counter == 2")
  } else if(counter == 3) {
    console.log("Counter == 3")
  } else {
    console.log("counter is not 1, 2 or 3")
  }

  //SWITCH STATEMENTS
  let counter = 5
  switch(counter) {
    case 5:
        console.log("value is 5") //continues to run as there is no break added
    default:
        console.log("default case")
  }
//It runs both in this case

switch(counter) {
    case 5:
        console.log("value is 5")
        break //adding the break, it stops executing
    default:
        console.log("default case")
  }
 
  switch(counter) {
    case 5:
        console.log("value is 5")
    case 7:
        console.log("value is 7")
    case 8:
        console.log("value is 8")
        break //we can choose where we wanna break it. The moment it encounters a break, it stops.
        console.log("default case")
  }
 