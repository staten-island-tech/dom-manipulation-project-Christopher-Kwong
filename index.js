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

const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("Input"),

  Output: document.getElementById("Output"),
};

function CreateObject(inputString) {
  return `<div class = Box>
      <img width="200px" src ="${inputString}">
      <br>
      <button type ="click" id = "Remove">Remove</button>
    </div>`;
}

function InsertObject(newObject, atHere) {
  atHere.insertAdjacentHTML("beforeend", newObject);
}

function Clear(inputField) {
  inputField.value = "";
}

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();
  let url = DOMSelectors.Image.value;
  InsertObject(CreateObject(url), DOMSelectors.Output);
  Clear(DOMSelectors.Image);
  let Remove = document.getElementById("Remove");
  Remove.addEventListener("click", function () {
    DOMSelectors.Output.innerHTML = "";
  });
});
