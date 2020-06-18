// select Button to add text
const btn = document.querySelector("button");
// select input to get text
const input = document.querySelector("input");
// select ul to add text
const ul = document.querySelector("ul");
// listen to click on button to add text to the list
btn.addEventListener("click", addToList);
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


// add icons or buttons to 
// change color delete done and un done the item

  








// check to input value is not empty
if (input.value !== "") {
     // add li to ul tag
  ul.appendChild(li);
}
 
  // clear the input value to add more text
  input.value = ""
}
