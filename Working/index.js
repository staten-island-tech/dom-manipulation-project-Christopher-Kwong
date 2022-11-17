const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("Input"),

  Output: document.getElementById("Output"),
};

function CreateObject(Input) {
  return `<img class="Image" height="80px" src ="${Input}">`;
}

function InsertObject(AtHere, NewObject) {
  AtHere.insertAdjacentHTML("beforeend", NewObject);
}

function Clear(inputField) {
  inputField.value = "";
}

function Remove() {
  let RemoveBox = document.getElementById("Remove");
  RemoveBox.addEventListener("click", function () {
    DOMSelectors.Output.innerHTML = "";
  });
}

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let url = DOMSelectors.Image.value;
  InsertObject(DOMSelectors.Output, CreateObject(url));
  Clear(DOMSelectors.Image);
  Remove();
});

/* let Counter = 1;

const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("Input"),

  LinkArea: document.getElementById("LinkArea"),
  Output: document.getElementById("Output"),
};

function CreateUrl() {
  Counter = Counter + 1;
  return `<div>
    <label for="Input${Counter}">Image ${Counter}:</label>
    <input id="Input${Counter}" Input="Input" type="text"/>
  </div>`;
}

function CreateObject(Input) {
  return `<img class="Image" width="200px" src ="${Input}${Counter}">`;
}

function InsertObject(AtHere, NewObject) {
  AtHere.insertAdjacentHTML("beforeend", NewObject);
}

function Clear(inputField) {
  inputField.value = "";
}

function Remove() {
  let RemoveBox = document.getElementById("Remove");
  RemoveBox.addEventListener("click", function () {
    DOMSelectors.Output.innerHTML = "";
  });
}

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let url = DOMSelectors.Image.value;
  InsertObject(DOMSelectors.Output, CreateObject(url));
  InsertObject(DOMSelectors.LinkArea, CreateUrl());
  Clear(DOMSelectors.Image);
  Remove();
}); */
