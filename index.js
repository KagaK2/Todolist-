console.log("KENDRICK LAMAR");

formSubmit = event => {
  event.preventDefault();
  console.log(event.target[0].value);
  let toDoItem = document.createElement("div");
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "X";
  removeButton.onclick = event => removeParent(event);
  toDoItem.innerHTML = event.target[0].value;
  toDoItem.appendChild(removeButton);
  document.getElementById("todo-list").appendChild(toDoItem);
};

removeParent = event => {
  console.log(
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
  );
};
