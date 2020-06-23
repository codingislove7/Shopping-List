// select Button to add text
const btn = document.querySelector(".add");
// select input to get text
const input = document.querySelector("input");
// select ul to add text
let ul = document.querySelector("ul");

// listen to click on button to add text to the list
btn.addEventListener("click", addToList);
// listen to Enter key on input to add text to the list
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // code for enter
    addToList();
  }
});
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
  li.classList.add("list-group-item", "border", "my-1");

  // 1. Create the  Delete button
  const remove = document.createElement("button");
  remove.classList.add("btn", "btn-sm", "btn-outline-danger", "float-right");
  remove.innerHTML = "Delete";

  // 2. Append to list
  li.appendChild(remove);

  // 3. Add event handler
  remove.addEventListener("click", function () {
    this.parentNode.remove();
    localStorage.setItem("listItems", ul.innerHTML);
  });

  // 1. Create the  Done button
  const done = document.createElement("button");
  done.classList.add(
    "btn",
    "btn-sm",
    "btn-outline-success",
    "float-right",
    "mr-2"
  );
  done.innerHTML = "Done";

  // 2. Append to list
  li.appendChild(done);

  // 3. Add event handler
  done.addEventListener("click", function () {
    this.parentNode.classList.add("doneText");
    this.remove();
    localStorage.setItem("listItems", ul.innerHTML);
  });

  // check to input value is not empty
  if (input.value !== "") {
    // add li to ul tag
    ul.appendChild(li);
  } else {
    // focus in input to user enter a text
    input.focus();
  }

  // clear the input value to add more text
  input.value = "";
  changeColor();
  // Save the list to localStorage
  localStorage.setItem("listItems", ul.innerHTML);
}
// Check for saved list items
var saved = localStorage.getItem("listItems");

// If there are any saved items, update our list
if (saved) {
  ul.innerHTML = saved;
}

// Add event listener to delete and Done button
// select the buttons
const remove = document.querySelectorAll(".btn-outline-danger");
// 3. Add event handler
remove.forEach((e) => {
  e.addEventListener("click", function () {
    this.parentNode.remove();
    // Save the list to localStorage
    localStorage.setItem("listItems", ul.innerHTML);
  });
});
const done = document.querySelectorAll(".btn-outline-success");
// 3. Add event handler
done.forEach((e) => {
  e.addEventListener("click", function () {
    this.parentNode.classList.add("doneText");
    this.remove();
    localStorage.setItem("listItems", ul.innerHTML);
  });
});

// concat 2 arrays
// let a = [1, 2, 3];
// let b = ["a", "b", "c", "d", "e", "f"];
// let c = b.map((item, index) => {
//  return item + a[index % 3];
// });
// console.log(c);
function changeColor() {
  let colors = [
    "border-primary",
    "border-secondary",
    "border-success",
    "border-info",
    "border-dark",
  ];
  let shoppingList = document.querySelectorAll("li");
  shoppingList.forEach((e, index) => {
    e.classList.add(colors[index % 5]);
  });
}
