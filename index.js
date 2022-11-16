/* const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("Input"),

  Output: document.getElementById("Output"),
};

function CreateObject(inputString) {
  return `<div class = Box>
      <img width="200px" src ="${inputString}">
      <br>
      <button type ="click" id = "Remove" onClick="RemoveObject();">Remove</button>
    </div>`;
}

function InsertObject(newObject, atHere) {
  atHere.insertAdjacentHTML("beforeend", newObject);
}

function Clear(inputField) {
  inputField.value = "";
}

function RemoveObject() {
  DOMSelectors.Output.innerHTML = "";
}

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();
  let url = DOMSelectors.Image.value;
  InsertObject(CreateObject(url), DOMSelectors.Output);
  Clear(DOMSelectors.Image);
});
 */

/* const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("Input"),

  Output: document.getElementById("Output"),
};

function CreateObject(inputString) {
  return `<div id = Box>
      <img width="200px" src ="${inputString}">
      <br>
      <button type ="click" id = "Remove">Remove</button>
    </div>`;
}

function InsertObject(atHere, newObject) {
  atHere.insertAdjacentHTML("beforeend", newObject);
}

function Clear(inputField) {
  inputField.value = "";
}

function Repeat() {
  let Remove = document.getElementById("Remove");
  Remove.addEventListener("click", function () {
    DOMSelectors.Output.innerHTML = "<p></p>";
  });
}

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let url = DOMSelectors.Image.value;
  InsertObject(DOMSelectors.Output, CreateObject(url));
  Clear(DOMSelectors.Image);
  Repeat();
}); */

/* let i = 0;
let Text = "";

for (; i < 10; i++) {
  Text += `<button id = "Remove${i}">Remove${i}</button>`;
}

document.getElementById("demo").innerHTML = Text;

function Repeat() {
  let body = document.getElementById("Body");
  Remove1.addEventListener("click", function () {
    body.innerHTML = "<p></p>";
  });
}

Repeat(); */

let counter = 0;
let Text = "";

for (; counter <= 10; counter++) {
  Text += `<div id=Body>
    <button onClick="removeElement">Remove${counter}</button>
  </div>`;
}

document.getElementById("demo").innerHTML = Text;

function removeElement(Id) {
  let Body = `Body + ${Id}`;
  let Remove = `Remove + ${Id}`;
  Remove.addEventListener("click", function () {
    Body.innerHTML = "<p></p>";
  });
}

removeElement(counter);
