console.log("KENDRICK LAMAR");

formSubmit = event => {
  event.preventDefault();
  console.log(event.target[0].value);
  let toDoItem = document.createElement("p");
  toDoItem.innerHTML = event.target[0].value;
  document.getElementById("todo-list").appendChild(toDoItem);
};
