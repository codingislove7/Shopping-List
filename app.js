// select Button to add text
const btn = document.querySelector("button");
// select input to get text
const input = document.querySelector("input");
// select ul to add text
const ul = document.querySelector("ul");
// store 2 function in one function to run both in event listener
function funcs() {
  addToList(), changeColor();
}
// listen to click on button to add text to the list
btn.addEventListener("click", funcs);

// add text to the list
function addToList() {
  // create li tag
  let li = document.createElement("li");
  // get input value
  let text = input.value;
  // create a text node from input value
  let textB = document.createTextNode(text);
  // add the text to li tag
  li.appendChild(textB);
  // add bootstrap class to li tag
  li.classList.add("list-group-item");

  // 1. Create the  Delete button
  const remove = document.createElement("button");
  remove.classList.add("btn", "btn-sm", "btn-danger", "float-right");
  remove.innerHTML = "Delete";

  // 2. Append to list
  li.appendChild(remove);

  // 3. Add event handler
  remove.addEventListener("click", function () {
    this.parentNode.remove();
  });

  // check to input value is not empty
  if (input.value !== "") {
    // add li to ul tag
    ul.appendChild(li);
  }

  // clear the input value to add more text
  input.value = "";
}

function changeColor() {
  let lists = document.querySelectorAll("li");

  // color list
  let colorsClass = [
    "list-group-item-primary",
    "list-group-item-secondary",
    "list-group-item-success",
    "list-group-item-warning",
    "list-group-item-info",
    "list-group-item-dark",
  ];

  let color = colorsClass.forEach((e) => {
    return e;
  });
  lists.forEach((element) => {});
}
