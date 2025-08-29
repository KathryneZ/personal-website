const shoppingList = document.getElementById("shoppingList")
console.log(shoppingList)

const groceries = [
    "apples",
    "bread",
    "eggs",
    "butter"
]

let listItem = document.createElement("li")
shoppingList.appendChild(listItem)
listItem.textContent = groceries[0]

// let listItem2 = document.creatElement("li")
// shoppingList.appendChild(listItem2)
// listItem.textContent = groceries[1]
// //make things more efficent w loops

//----------
// for(initialization; condition; afterthought) {
// }

//FOR loop
for(let counter = 0; counter < groceries.length; counter++) {
    // let listItem = document.creatElement("li")
    // shoppingList.appendChild(listItem)
    // listItem.textContent = groceries[counter]
    // console.log(counter)
    shoppingList.innerHTML += "<li>" + groceries[counter] + "</li>"
}

for(let counter = 0; counter < 1; counter+= 2) {
    // let listItem = document.creatElement("li")
    // shoppingList.appendChild(listItem)
    // listItem.textContent = groceries[counter]
    // console.log(counter)
    shoppingList.innerHTML += "<li>" + groceries[counter] + "</li>"
}


