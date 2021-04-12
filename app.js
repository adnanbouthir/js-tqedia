// an array to store all the items in it as objects 
var tqediaArray = [];
//  render output on screen:
function renderTqedia(tqedia) {
    const list = document.querySelector(".js-list")
    const checked = tqedia.checked ? 'done': '';
    const node = document.createElement("li");
    // setting class attribute
    node.setAttribute('class', `tqedia-item ${checked}`);
    // Set the contents of the `li` element created above
    node.innerHTML = `
    <input id="${tqedia.id}" type="checkbox"/>
    <label for="${tqedia.id}" class="tick js-tick"></label>
    <span>${tqedia.text}</span>
  `;
   // Append the element to the DOM as the last child of
  // the element referenced by the `list` variable
  list.append(node);

}
// a function that adds tqedia 
function addTqedia(text) {
    const tqedia = {
        text,
        checked: false,
        id: Date.now(),
    };

    tqediaArray.push(tqedia);
    renderTqedia(tqedia);
}       
// select the form element
const form = document.querySelector("#jsForm");
// submit event listener 
form.addEventListener("submit", event => {
    event.preventDefault();
// select the text input
const input = document.querySelector(".addItems-input");
// clean the input: 
const text = input.value.trim();
if (text !== "") {
    addTqedia(text);
    input.value = "";
    input.focus(); 

}
});

// function to clear all items  

document.onclick = function (e) {
    if(e.target.className == 'displayItems-clear') {
        let JSLIST = document.querySelector(".js-list");
        while(JSLIST.hasChildNodes()) {
            JSLIST.removeChild(JSLIST.firstChild);
        }
    }
}