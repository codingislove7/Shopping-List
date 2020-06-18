const btn = document.querySelector("button");
const input = document.querySelector("input");
btn.addEventListener("click", addToList);
function addToList() {
    console.log(input.value);
}
