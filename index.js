formSubmit = event => {
  //prevent the reset caused by submitting the form
  event.preventDefault();
  if (event.target[0].value != "") {
    //create the container for the to do list item
    let toDoItem = document.createElement("li");
    //create the button to remove done item.
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "remove";
    //add an onclick function to the created button to remove the list item
    removeButton.onclick = event => removeParent(event);
    //get the text from the input into the list item
    toDoItem.innerHTML = event.target[0].value;
    toDoItem.appendChild(removeButton);
    document.getElementById("todo-list").appendChild(toDoItem);
    //reset the value of the form input
    event.target[0].value = "";
  }
};

removeParent = event => {
  //event.target is the remove button
  //then choose the parent which is the list item
  //then choose the parent of the list item which is the list
  //then remove the child of the list which is the selected list item
  event.target.parentNode.parentNode.removeChild(event.target.parentNode);
};
