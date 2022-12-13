const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("ImageInput"),
  Text: document.getElementById("TextInput"),
  Title: document.getElementById("TitleInput"),

  Output: document.getElementById("Output"),
};
var uniqueId = 0;

document.body.style.backgroundColor = "lightgrey";
DOMSelectors.Output.style.backgroundColor = "lightblue";

function CreateObject(FirstInput, SecondInput, ThirdInput, id) {
  return `<div class="Box"> 
    <p class="Text">${FirstInput}</p>
    <img class="Image" height="80px" src ="${SecondInput}">
    <p class="Text">${ThirdInput}</p>
    <button type="click" id="${id}">Remove</button>
  </div>`;
}

function InsertObject(Area, Object) {
  Area.insertAdjacentHTML("beforeend", Object);
}

function Clear(Input1, Input2, Input3) {
  Input1.value = "";
  Input2.value = "";
  Input3.value = "";
}

function Remove(id) {
  let Button = document.getElementById(id);
  Button.addEventListener("click", function () {
    this.parentElement.remove();
  });
}

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let url = DOMSelectors.Image.value;
  let text = DOMSelectors.Text.value;
  let title = DOMSelectors.Title.value.bold();
  let newId = "Remove" + uniqueId;
  uniqueId++;
  InsertObject(DOMSelectors.Output, CreateObject(title, url, text, newId));
  Clear(DOMSelectors.Title, DOMSelectors.Image, DOMSelectors.Text);
  Remove(newId);
});
