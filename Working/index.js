const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("ImageInput"),
  Text: document.getElementById("TextInput"),

  Output: document.getElementById("Output"),
};

function CreateObject(Input, SecondInput) {
  return `<div>
    <img class="Image" height="80px" src ="${Input}">
    <p class="Text">${SecondInput}</p>
  </div>`;
}

function InsertObject(AtHere, NewObject) {
  AtHere.insertAdjacentHTML("beforeend", NewObject);
}

function Clear(Input, Input2) {
  Input.value = "";
  Input2.value = "";
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
  let text = DOMSelectors.Text.value;
  InsertObject(DOMSelectors.Output, CreateObject(url, text));
  Clear(DOMSelectors.Image, DOMSelectors.Text);
  Remove();
});
