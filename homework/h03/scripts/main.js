function addItem() {
    //get the user's input, when they press the add item button
    let shoppingItem = document.getElementById("itemInput").value; //retrieves text the user typed with the id and .value 
    let dataType = document.getElementById("dataType").value; //retrieves selected data type
    let shoppingList = document.getElementById("shoppingList");

    //convert input to different dataTypes
    let convertedItem;
    switch (dataType) { // switch statement to convert shoppingItem based on dataType
        case "string": //if string, keep as string
            convertedItem = shoppingItem; 
            break;
        case "number":
            convertedItem = parseFloat(shoppingItem) || 0; //parseFloat converts a string into number(if the no. appears first)
            //when input is "text 3.14", parseFloat will return Not a Number, in this case convertItem to '0'
            break;
        case "boolean":
            convertedItem = Boolean(shoppingItem); //converts non empty values to true and empty values to false
            break;
        case "array":
            if (shoppingItem) {
                convertedItem = shoppingItem.split(" ");
            } else {
                convertedItem = [""];
            } 
            //.split(" ") splits a string into an array of words based on spaces
            //if shoppingItem has a value, it splits it into an array, otherwise it defaults to [""]
            break;
        case "object":
            convertedItem = { item: shoppingItem }; //here is an object with "item" inside
            break;
    }

    //creating new listItem (adding to the shopping list)
    let listItem = document.createElement("li");
    listItem.textContent = JSON.stringify(convertedItem);

    //create and attach remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        shoppingList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    shoppingList.appendChild(listItem);

    //clear input after adding item
    document.getElementById("itemInput").value = "";
}
