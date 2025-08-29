const shoppingList = document.getElementById("shoppingList")
console.log(shoppingList)

//for loops are good when we know the number of items in the array/how many times we need to run the loop before we stop.

let unserInput = prompt("Enter grocery item, or type done to finish")
console.log(unserInput)

 
while(unserInput != "done") { //as long a userinput is not equal to done
    unserInput = prompt("Enter grocery item, or type done to finish")
    if(unserInput != "done") {
        shoppingList.innerHTML += "<li>" + userInput + "</li>"
    }
}
